import express from "express";
const router = express.Router();
import BookController from "../contollers/book.controller";

router.get("/all", BookController.getAllBooks);

export default router;
