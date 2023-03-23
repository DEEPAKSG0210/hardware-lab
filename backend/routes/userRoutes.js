import { Router } from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/", async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
});  

router.post("/", async (req, res) => {
    const {userId, password } = req.body;
    try {
      const newUser = await User.create({
        userId: userId,
        password: bcrypt.hashSync(password, 8)
      });
        res.status(201).json({user: newUser._id });
    } catch(error) {
        res.status(409).json({ message: error.message});
    }
});

router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        res.status(200).json(user);
    }
});

router.delete("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        res.status(200).json(user);
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ userId: username });
      if (user) {
        const auth = bcrypt.compareSync(password, user.password);
        if (auth) {
          res.status(200).json({
            token: jwt.sign({ _id: user._id }, username),
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
