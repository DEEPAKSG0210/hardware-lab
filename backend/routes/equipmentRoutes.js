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
      barcode: id,
    })
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
