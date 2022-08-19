/**
 *        @file book.controller.ts
 *     @summary book controller function to show lists of books
 * @description This file contains function(s) which call our respective service(s) to get the data
 *     @returns Express JSON Response
 */

export interface IBookDetails {
    id?: string;
    title: string;
    author: string;
    description: string;
}

import { Response, Request, NextFunction } from "express";
import BookService from "../../services/book.service";

// call GET: services and return response to client
const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await BookService.getAll();
        res.status(200).json({ status: true, data });
        return;
    } catch (error) {
        next(error);
    }
};

// call POST: services and return response to client
const postBookDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { title, author, description }: IBookDetails = req.body;
    try {
        const data = await BookService.post({ title, author, description });
        res.status(200).json({ status: true, data });
        return;
    } catch (error) {
        next(error);
    }
};

// call UPDATE: services and return response to client
const updateBookDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    const { title, author, description }: IBookDetails = req.body;
    try {
        const data = await BookService.update({
            id,
            title,
            author,
            description,
        });
        res.status(200).json({ status: true, data });
        return;
    } catch (error) {
        next(error);
    }
};

// call DELETE: services and return response to client
const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const data = await BookService.deleteBook(id);
        res.status(200).json({ status: true, message: "deleted" });
        return;
    } catch (error) {
        next(error);
    }
};

export default {
    getAllBooks,
    postBookDetails,
    updateBookDetails,
    deleteBook,
};
