import Order from "../models/Order.js";
import Product from "../models/Product.js";
import User from "../models/User.js";
import stripe from "stripe";

/* -------- PLACE ORDER COD -------- */
export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    if (!address || items.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid Data" });
    }

    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      amount += product.offerPrice * item.quantity;
    }

    /* ---- ADD TAX CHARGE (2%) ---- */
    amount += Math.floor(amount * 0.02);

    await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
    });

    return res
      .status(200)
      .json({ success: true, message: "Order Placed Successfully" });
  } catch (error) {
    console.error("Place Order COD Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Place Order COD Error: ${error.message}`,
    });
  }
};

/* -------- PLACE ORDER STRIPE -------- */
export const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    const { origin } = req.headers;

    if (!address || items.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid Data" });
    }

    let productData = [];

    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      productData.push({
        name: product.name,
        price: product.offerPrice,
        quantity: item.quantity,
      });
      amount += product.offerPrice * item.quantity;
    }

    /* ---- ADD TAX CHARGE (2%) ---- */
    amount += Math.floor(amount * 0.02);

    const order = await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "Online",
    });

    /* ---- STRIPE GATEWAY INITIALIZE ---- */
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

    /* ---- CREATE LINE ITEMS FOR STRIPE ---- */
    const line_items = productData.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.floor(item.price + item.price * 0.02),
        },
        quantity: item.quantity,
      };
    });

    /* ---- CREATE SESSION ---- */
    const session = await stripeInstance.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/loader?next=my-orders`,
      cancel_url: `${origin}/cart`,
      metadata: {
        orderId: order._id.toString(),
        userId,
      },
    });

    return res.json({ success: true, url: session.url });
  } catch (error) {
    console.error("Place Order Stripe Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Place Order Stripe Error: ${error.message}`,
    });
  }
};

/* -------- STRIPE WEBHOOKS TO VERIFY PAYMENTS ACTION : STRIPE  -------- */
export const stripeWebhooks = async (request, response) => {
  /* ---- STRIPE GATEWAY INITIALIZE  ---- */
  const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

  const sig = request.headers["stripe-signature"];
  let event;

  try {
    event = stripeInstance.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    response.status(400).send(`Wenhook Error: ${error.message}`);
  }

  /* ---- HANDLE THE EVENT  ---- */
  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      /* -- GETTING SESSION METADATA -- */
      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });

      const { orderId, userId } = session.data[0].metadata;

      /* -- MARK PAYMENT AS PAID -- */
      await Order.findByIdAndUpdate(orderId, { isPaid: true });

      /* -- CLEAR USER CART -- */
      await User.findByIdAndUpdate(userId, { cartItems: {} });
      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      /* -- GETTING SESSION METADATA -- */
      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });

      const { orderId } = session.data[0].metadata;
      await Order.findByIdAndDelete(orderId);
      break;
    }

    default:
      console.log(`Unhandled event type ${event.type}`);
      break;
  }
  response.json({ received: true });
};

/* -------- GET ORDERS BY USER[ID] -------- */
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId;

    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    return res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Get Orders By User[ID] Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Get Orders By User[ID] Error: ${error.message}`,
    });
  }
};

/* -------- GET ALL ORDERS FOR SELLER OR ADMIN -------- */
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    return res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Get All Orders For Seller or Admin Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Get All Orders For Seller or Admin Error: ${error.message}`,
    });
  }
};
