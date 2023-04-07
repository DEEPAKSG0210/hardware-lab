import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Staff from "../models/Staff.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { userId, password } = req.body;
  try {
    const newStaff = await Staff.create({
      userId: userId,
      password: bcrypt.hashSync(password, 8)
    });
    res.status(201).json({ staff: newStaff._id });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  const staff = await Staff.findById(req.params.userId);
  if (!staff) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json(staff);
  }
});

router.delete("/:userId", async (req, res) => {
  const staff = await Staff.findById(req.params.userId);
  if (!staff) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json(staff);
  }
});

router.post("/login", async (req, res) => {
  const { userId, password } = req.body;
  try {
    const staff = await Staff.findOne({ userId: userId });
    if (staff) {
      const auth = bcrypt.compareSync(password, staff.password);
      if (auth) {
        res.status(200).json({
          token: jwt.sign({ _id: staff._id }, userId),
          userId: userId,
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
