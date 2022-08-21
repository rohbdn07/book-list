/**
 *        @file errorHandler.ts
 *     @summary error handler
 * @description This middleware handle errors checks and return response
 *   @functions - errorHandler()
 */

import { NextFunction, Response, Request } from "express";
import BaseError from "../../errors/customError";
import Logger from "../../library/logger";

const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof BaseError) {
        Logger.error(error.message);
        return res.json({ status: false, errors: error.serializeErrors() });
    }
    Logger.error(error.message);
    res.json({
        errors: [{ message: `${error.message}` || "Something went wrong!!!" }],
    });
    next();
};

export default errorHandler;
