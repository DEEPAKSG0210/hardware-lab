import { Router } from "express";
import equipment from "../models/equipment.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const equipment = await equipment.find();
    res.status(200).json(equipment);
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
