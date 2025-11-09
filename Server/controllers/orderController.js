// Server/controllers/orderController.js
import Order from "../models/Order.js";
import Product from "../models/Product.js";

/* -------- PLACE ORDER COD -------- */
export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    if (!address || items.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid Data" });
    }

    /* ---- CALCULATE AMOUNT USING ITEMS ---- */
    // let amount = await items.reduce(async,(acc, item)=>{
    //     const product = await Product.findById(item.product)
    //     return (await acc) + product.offerPrice * item.quantity;
    // },0)
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
    console.error("Update User Cart Data Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Update User Cart Data Error: ${error.message}`,
    });
  }
};

/* -------- GET ORDERS BY USER[ID] -------- */
export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.body;
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
