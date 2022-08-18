import express from "express";
const router = express.Router();
import BookController from "../contollers/book.controller";

// GET: all book list
router.get("/all", BookController.getAllBooks);

// POST: route to create new book
router.post("/add", BookController.postBookDetails);

// PUT: route to update book by its ID
router.put("/update/:id", BookController.updateBookDetails);

export default router;
