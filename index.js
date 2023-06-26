import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/", routes);
// mongodb://localhost:27017
mongoose.connect("mongodb://0.0.0.0:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});