import mongoose from "mongoose";

const PositionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cost: {
            type: Number,
            required: true,
        },
        category: {
            ref: "categories",
            type: mongoose.Schema.Types.ObjectId,
        },
        user: {
            ref: "users",
            type: mongoose.Schema.Types.ObjectId,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("positions", PositionSchema);
