import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const LINK_DB = process.env.LINK_DB;

mongoose
    .connect(LINK_DB)
    .then(() => console.log("MongoDB OK"))
    .catch((err) => console.log("DB error", err));

export default mongoose;
