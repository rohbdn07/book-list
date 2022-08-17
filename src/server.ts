require("dotenv").config();
import express from "express";
import cors from "cors";
import mangoose from "mongoose";
const path = require("path");
import router from "./api/routes/index";

const app = express();

//connection to Mangodb...
const dbURI = `${process.env.MONGO_DB_URI}`;
mangoose
    .connect(dbURI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
    })
    .then(() => console.log("CONNECTED to Mongo-DB"))
    .catch((err) => console.log("there is an error", err));

//listing to LocalHost
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
console.log("  Press CTRL-C to stop\n");

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

module.exports = app;
