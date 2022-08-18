/**
 *        @file index.ts
 *     @summary various api end-points routes
 * @description This file contains various api end-points routes that perform
 * RESTfulAPIs actios.
 *     @middleware - validateReqBody middleware
 *   @action - GET
 *           - POST
 *           - PUT
 *           - DELETE
 */

import express from "express";
const router = express.Router();

import BookController from "../contollers/book.controller";
import Middlewares from "../middlewares/checkInputs";

// GET: all book list
router.get("/all", BookController.getAllBooks);

// POST: route to create new book
router.post(
    "/add",
    Middlewares.validateReqBody,
    BookController.postBookDetails
);

// PUT: route to update book by its ID
router.put(
    "/update/:id",
    Middlewares.validateReqBody,
    BookController.updateBookDetails
);

// DELETE: route tp delete book by its ID
router.delete("/delete/:id", BookController.deleteBook);

export default router;
