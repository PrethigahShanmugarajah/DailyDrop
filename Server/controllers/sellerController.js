// Server/controllers/sellerController.js
import jwt from "jsonwebtoken";

/* -------- LOGIN SELLER -------- */
export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (password === process.env.SELLER_PASSWORD && process.env.SELLER_EMAIL) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.cookie("sellerToken", token, {
        httpOnly: true, // Prevent JavaScript to access cookie
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        samSite: process.env.NODE_ENV === "production" ? "none" : "strict", // CSRF protection
        maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time
      });

      return res.status(200).json({
        success: true,
        message: "Seller logged in successfully!",
        token,
      });
    } else {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.error("Login Seller Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Login Seller Error: ${error.message}`,
    });
  }
};

/* -------- CHECK AUTH SELLER -------- */
export const isSellerAuth = async (req, res) => {
  try {
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Check Auth Seller Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Check Auth User Seller Error: ${error.message}`,
    });
  }
};

/* -------- LOGOUT SELLER -------- */
export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true, // Prevent JavaScript to access cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      samSite: process.env.NODE_ENV === "production" ? "none" : "strict", // CSRF protection
    });

    return res.status(200).json({
      success: true,
      message: "Seller logged out successfully",
    });
  } catch (error) {
    console.error("Logout Seller Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Logout Seller Error: ${error.message}`,
    });
  }
};
