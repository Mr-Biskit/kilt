import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
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
