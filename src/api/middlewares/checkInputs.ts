/**
 *        @file checkInput.ts
 *     @summary validate req.body values
 * @description This middleware that checks if req.body contains required values or not
 * and then passes into request body
 *     @middleware - checkInput middleware
 *   @functions - validateReqBody()
 */
import { NextFunction, Response, Request } from "express";

const validateReqBody = (req, res: Response, next: NextFunction) => {
    const { title, author, description } = req.body;
    if (title && author && description) {
        next();
    } else {
        res.status(400).json({
            success: false,
            message: "Please fill all inputs",
        });
    }
};

export default {
    validateReqBody,
};
