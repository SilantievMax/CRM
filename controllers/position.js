import PositionModel from "../models/Position.js";
import errorHandler from "../utils/errorHandler.js";

export const getByCategoryId = async (req, res) => {
    try {
        const position = await PositionModel.find({
            category: req.params.categoryId,
            user: req.user.id,
        });
        res.status(200).json(position);
    } catch (err) {
        errorHandler(res, err);
    }
};

export const create = async (req, res) => {
    try {
        const position = new PositionModel({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            user: req.user.id,
        });

        await position.save();

        res.status(201).json(position);
    } catch (err) {
        errorHandler(res, err);
    }
};

export const remove = async (req, res) => {
    try {
        await PositionModel.remove({ _id: req.params.id });
        res.status(200).json({ message: "Позиция была удалена" });
    } catch (err) {
        errorHandler(res, err);
    }
};

export const update = async (req, res) => {
    try {
        const position = await PositionModel.findOneAndUpdate(
            {
                _id: req.params.id,
            },
            {
                $set: req.bady,
            },
            {
                new: true,
            }
        );

        res.status(200).json(position);
    } catch (err) {
        errorHandler(res, err);
    }
};
