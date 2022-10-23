import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        imageSrc: {
            type: String,
            default: "",
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

export default mongoose.model("categories", CategorySchema);
