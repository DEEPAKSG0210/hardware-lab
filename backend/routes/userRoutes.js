import { Router } from "express";
import user from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/", async (req, res) => {
    try{
        const users = await user.find();
        res.status(200).json(users);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
});  

router.post("/", async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch(error) {
        res.status(409).json({ message: error.message});
    }
});

