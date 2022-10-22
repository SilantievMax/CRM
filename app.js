import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import cors from "cors";
import morgan from "morgan";
import * as Router from "./routes/index.js";
import middleware from "./middleware/passport.js";

const app = express();

app.use(passport.initialize());
middleware(passport);

app.use(morgan("dev")); // Удобное логирование запросов
app.use(bodyParser.urlencoded({ extended: true })); //защита от символов в url адресе
app.use(bodyParser.json()); // в место app.use(express.json());
app.use(cors());

//Routers
app.use("/api/auth", Router.auth);
app.use("/api/analytics", Router.analytics);
app.use("/api/category", Router.category);
app.use("/api/order", Router.order);
app.use("/api/position", Router.position);

export default app;
