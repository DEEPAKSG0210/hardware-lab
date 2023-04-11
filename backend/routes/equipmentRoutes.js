import { Router } from "express";
import equipment from "../models/equipment.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const equit = await equipment.find();
    res.status(200).json(equit);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const eq = await equipment.findOne({
      nfc_no: id,
    })
    res.status(200).json(eq);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/name/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const eq = await equipment.findOne({
      name: id,
    })
    res.status(200).json(eq);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/barcode-list", async (req, res) => {
  const { list } = req.body;
  try {
    const eq = await equipment.find({
      nfc_no: { $in: list },
    })
    res.status(200).json(eq);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.put("/update-quantity", async (req, res) => {
  const { id, quantity } = req.body;
  try {
    const eq = await equipment.findOneAndUpdate(
      { nfc_no: id },
      { $set: { available: quantity } },
      { new: true }
    )
    res.status(200).json(eq);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// router.post("/", async (req, res) => {
//   const { userId, password } = req.body;
//   try {
//     const newStaff = await Staff.create({
//       userId: userId,
//       password: bcrypt.hashSync(password, 8)
//     });
//     res.status(201).json({ staff: newStaff._id });
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// });

export default router;
