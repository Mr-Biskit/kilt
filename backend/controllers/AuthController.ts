import { Request, Response } from "express";
import UserModel from "../models/UserModel";

export const registerUser = async (req: Request, res: Response) => {
    const { email } = req.body;
    console.log(email);
    const user = await UserModel.findOne({ email });
    console.log(user);
    if (!user) {
        await UserModel.create({
            email,
        });
        res.status(201).json({ message: "User created" });
    } else {
        res.status(400).json({ message: "User already exists" });
    }
};
export const loginUser = async (req: Request, res: Response) => {
    const { email } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        res.status(200).json({ message: "Login Successfull" });
    }
};
