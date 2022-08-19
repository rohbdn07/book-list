import dotenv from "dotenv";
dotenv.config();
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import mangoose from "mongoose";
import path from "path";

import router from "./api/routes/index";
import { config } from "./config/configDB";
import Logger from "./library/logger";
import errorHandler from "./api/middlewares/errorHandler";

const app = express();

/** Start server function */
const startServer = async () => {
    //connection to Mangodb...
    const dbURI = config.mongo.url;
    await mangoose
        .connect(dbURI)
        .then(() => Logger.info("CONNECTED To MongoDB"))
        .catch((error) => {
            Logger.error("Unable to Connect to MongoDB");
            Logger.error(error);
        });

    app.use((req: Request, res: Response, next: NextFunction) => {
        /** log the Request */
        Logger.info(
            `Incoming -> Method: [${req.method}] - Url: [${req.url}] -IP: [${req.socket.remoteAddress}]`
        );

        res.on("finish", () => {
            /** Log  Response */
            Logger.info(
                `Incoming -> Method: [${req.method}] -Url: [${req.url}] -IP: [${req.socket.remoteAddress}] -Status: [${res.statusCode}]`
            );
        });
        next();
    });

    // parse json request body
    app.use(express.json());
    // parse urlencoded request body
    app.use(express.urlencoded({ extended: true }));
    // enable cors
    app.use(cors());

    /** Routes */
    app.use("/api/book", router);

    /** API Error Handeling */
    app.use(errorHandler);

    /** Health Check */
    app.get("/ping", (req: Request, res: Response) =>
        res.status(200).json({ message: "pong" })
    );

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
    router.get("*", (req: Request, res: Response) => {
        res.redirect("/api/book/all");
    });

    /** Routes Error handling if doesnot exist */
    app.use((req: Request, res: Response, next: NextFunction) => {
        const error = new Error("Current api route doesnot exist");
        return res.status(404).json({ message: error.message });
    });

    //listening to LocalHost | PORT
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => Logger.info(`listening on ${PORT}`));
    Logger.info("Press CTRL-C to stop\n");
};
/** START SERVER */
startServer();

export default app;
