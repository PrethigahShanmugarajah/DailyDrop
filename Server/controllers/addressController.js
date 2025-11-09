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

/* -------- GET ADDRESS -------- */
export const getAddress = async (req, res) => {
  try {
    const { userId } = req.body;
    const address = await Address.find({ userId });
    return res.status(200).json({ success: true, address });
  } catch (error) {
    console.error("Get Address Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Get Address Error: ${error.message}`,
    });
  }
};
