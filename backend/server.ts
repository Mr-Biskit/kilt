import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import UserModel from "./models/UserModel";
import MessageRouter from "./routes/MessageRouter";
import AuthRouter from "./routes/AuthRouter";
import ChatRouter from "./routes/ChatRouter";
import UserRouter from "./routes/UserRouter";

const app = express();
const PORT = 8000;
app.use(express.json());

const MONGO_URL = process.env.MONGODB_URL as string;

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("MongoDB is connected");
        app.listen(PORT, () =>
            console.log(`Listening at Port http://localhost:${PORT}`)
        );
    })
    .catch((error) => console.log(`${error} did not connect`));

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/message", MessageRouter);
app.use("/api/v1/chat", ChatRouter);
app.get("/api/v1/user", UserRouter);
