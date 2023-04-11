import { Router } from "express";
import jwt from "jsonwebtoken";
import Student from "../models/student.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { userId, name } = req.body;
  try {
    const newStudent = await Student.create({
      userId: userId,
      name: name
    });
    res.status(201).json({ student: newStudent._id });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  const student = await Student.findOne({ userId: req.params.userId });
  if (!student) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json(student);
  }
});

router.delete("/:userId", async (req, res) => {
  const student = await Student.findById(req.params.userId);
  if (!student) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json(student);
  }
});

// Define a function to get the name for a given userId

// Use the function in the login route
router.post("/login", async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await Student.findOne({ userId: userId });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.put("/borrow", async (req, res) => {
  const { roll, borrow } = req.body;
  try {
    const user = await Student.findOneAndUpdate(
      {userId: roll},
      {
        borrow: borrow,
      },
    )
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
})

export default router;
