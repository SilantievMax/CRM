import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            default: Date.now,
        },
        order: {
            type: Number,
            required: true,
        },
        list: [
            {
                name: {
                    type: String,
                },
                quantity: {
                    type: Number,
                },
                cost: {
                    type: Number,
                },
            },
        ],
        user: {
            ref: "users",
            type: mongoose.Schema.Types.ObjectId,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("orders", OrderSchema);
