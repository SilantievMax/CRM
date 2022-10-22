import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";
import dotenv from "dotenv";
import errorHandler from "../utils/errorHandler.js";

dotenv.config();

export const login = async (req, res) => {
    const candidate = await UserModel.findOne({ email: req.body.email });

    if (candidate) {
        const passwordResult = bcrypt.compareSync(
            req.body.password,
            candidate.password
        );
        if (passwordResult) {
            const token = jwt.sign(
                {
                    email: candidate.email,
                    userId: candidate._id,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: 60 * 60,
                }
            );

            const { password, ...user } = candidate._doc;
            res.status(200).json({
                user,
                token: `Bearer ${token}`,
            });
        } else {
            res.status(401).json({ message: "Неверный пароль" });
        }
    } else {
        res.status(404).json({ message: "Пользователь не найден" });
    }
};

export const register = async (req, res) => {
    const candidate = await UserModel.findOne({ email: req.body.email });

    if (candidate) {
        res.status(409).json({ message: "Пользователь существует" });
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;

        const doc = new UserModel({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
        });
        try {
            await doc.save();
            const { password, ...user } = doc._doc;
            res.status(201).json(user);
        } catch (err) {
            errorHandler(res, err);
        }
    }
};
