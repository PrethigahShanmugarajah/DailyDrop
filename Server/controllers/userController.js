// Server/controllers/userController.js
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* -------- REGISTER USER -------- */
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // if (!name || !email || !password) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Missing Details" });
    // }

    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing detail(s): ${missingFields.join(", ")}`,
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true, // Prevent JavaScript to access cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      samSite: process.env.NODE_ENV === "production" ? "none" : "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time
    });

    return res.status(200).json({
      success: true,
      message: "User registered successfully!",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Register User Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Register User Error: ${error.message}`,
    });
  }
};

/* -------- LOGIN USER -------- */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // if (!email || !password)
    //   return res.status(400).json({
    //     success: false,
    //     message: "Email and Password are required",
    //   });

    if (!email || !password) {
      const missingFields = [];
      if (!email) missingFields.push("email");
      if (!password) missingFields.push("password");

      return res.status(400).json({
        success: false,
        message: `Missing field(s): ${missingFields.join(", ")}`,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true, // Prevent JavaScript to access cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      samSite: process.env.NODE_ENV === "production" ? "none" : "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time
    });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully!",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Login User Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Login User Error: ${error.message}`,
    });
  }
};

/* -------- CHECK AUTH USER -------- */
export const isAuth = async (req, res) => {
  try {
    // const { userId } = req.body;
    const userId = req.userId;
    const user = await User.findById(userId).select("-password");
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Check Auth User Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Check Auth User Error: ${error.message}`,
    });
  }
};

/* -------- LOGOUT USER -------- */
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true, // Prevent JavaScript to access cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      samSite: process.env.NODE_ENV === "production" ? "none" : "strict", // CSRF protection
    });

    return res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.error("Logout User Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Logout User Error: ${error.message}`,
    });
  }
};
