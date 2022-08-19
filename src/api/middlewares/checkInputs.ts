/**
 *        @file checkInput.ts
 *     @summary validate req.body values
 * @description This middleware that checks if req.body contains required values or not
 * and if yes, then call next() function OR if not, call next() function to error handling
 *     @middleware - checkInput middleware
 *   @functions - validateReqBody()
 */

import { NextFunction, Response, Request } from "express";
import { ValidationError } from "../../errors/validationError";

const validateReqBody = (req: Request, res: Response, next: NextFunction) => {
    const { title, author, description } = req.body;
    if (title && author && description) {
        next();
    } else {
        next(
            new ValidationError(
                "VALIDATION ERROR",
                200,
                "Please fill-up the required input value"
            )
        );
    }
};

export default {
    validateReqBody,
};
