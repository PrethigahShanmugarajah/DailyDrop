// Server/controllers/addressController.js
import Address from "../models/Address.js";

/* -------- ADD ADDRESS -------- */
export const addAddress = async (req, res) => {
  try {
    const { address, userId } = req.body;
    await Address.create({ ...address, userId });
    return res
      .status(200)
      .json({ success: true, message: "Address Added Successfully" });
  } catch (error) {
    console.error("Add Address Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Add Address Error: ${error.message}`,
    });
  }
};
