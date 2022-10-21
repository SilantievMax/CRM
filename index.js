import app from "./app.js";
import dotenv from "dotenv";
import "./database/database.js";

dotenv.config();
const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server OK PORT ${port}`));
