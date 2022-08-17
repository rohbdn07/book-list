/**
 *        @file book.controller.ts
 *     @summary book controller function to show lists of books
 * @description This file contains function(s) which call our respective service(s) to get the data
 *     @returns Express JSON Response
 */

import { Response, Request } from "express";

const getAllBooks = async (req: Request, res: Response) => {
    try {
        res.status(200).json("this is book controller");
    } catch (error) {
        console.log("there is an error", error);
        res.status(400).json({
            error: "unable to get all list of books details",
        });
    }
};

export default {
    getAllBooks,
};
