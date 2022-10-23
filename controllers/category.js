import CategoryModel from "../models/Category.js";
import PositionModel from "../models/Position.js";
import errorHandler from "../utils/errorHandler.js";

export const getAll = async (req, res) => {
    try {
        const categories = await CategoryModel.find({ user: req.user.id });
        res.status(200).json(categories);
    } catch (err) {
        errorHandler(res, err);
    }
};

export const getById = async (req, res) => {
    try {
        const category = await CategoryModel.findById(req.params.id);
        res.status(200).json(category);
    } catch (err) {
        errorHandler(res, err);
    }
};

export const remove = async (req, res) => {
    try {
        await CategoryModel.remove({ _id: req.params.id });
        await PositionModel.remove({ category: req.params.id });
        res.status(200).json({ message: "Категория удалена" });
    } catch (err) {
        errorHandler(res, err);
    }
};

export const create = async (req, res) => {
    const category = new CategoryModel({
        name: req.body.name,
        user: req.user.id,
        imageSrc: req.file ? req.file.path : "",
    });

    try {
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        errorHandler(res, err);
    }
};

export const update = async (req, res) => {
    try {
        const updated = {
            name: req.body.name,
        };

        if (req.file) {
            updated.imageSrc = req.file.path;
        }

        const category = await CategoryModel.findOneAndUpdate(
            { _id: req.params.id },
            { $set: updated },
            { new: true }
        );

        res.status(200).json(category);
    } catch (err) {
        errorHandler(res, err);
    }
};
