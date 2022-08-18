require("dotenv").config();
import express from "express";
import cors from "cors";
import mangoose from "mongoose";
const path = require("path");

import router from "./api/routes/index";
import { config } from "./config/configDB";
import Logger from "./library/logger";

const app = express();

//connection to Mangodb...
const dbURI = config.mongo.url;
mangoose
    .connect(dbURI)
    .then(() => Logger.info("CONNECTED To MongoDB"))
    .catch((error) => {
        Logger.error("Unable to Connect to MongoDB");
        Logger.error(error);
    });

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// enable cors
app.use(cors());

//get data from db
app.use("/api/book", router);

// Serve static assists if in PRODUCTION
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
}

// The `res.redirect()` function sends back an HTTP 302 by default.
// When an HTTP client receives a response with status 302, it will send
// an HTTP request to the URL in the response, in this case `/`
router.get("*", (req, res) => {
    res.redirect("/api/book/all");
});

/** Error handling */
app.use((req, res, next) => {
    const error = new Error("Current api route doesnot exist");
    Logger.error(error);
    return res.status(404).json({ message: error.message });
});

//listening to LocalHost | PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => Logger.info(`listening on ${PORT}`));
Logger.info("Press CTRL-C to stop\n");

module.exports = app;
