import User from "../models/User.js";

/* -------- UPDATE USER CART DATA -------- */
export const updateCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { cartItems } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { cartItems },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      cart: user.cartItems,
    });
  } catch (error) {
    console.error("Update User Cart Data Error:", error.message);
    return res.status(500).json({
      success: false,
      message: `Update User Cart Data Error: ${error.message}`,
    });
  }
};
