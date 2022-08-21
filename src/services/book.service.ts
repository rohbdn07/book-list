/**
 *        @file book.service.ts
 *     @summary Book service to communicate with database
 * @description This service communicate to database and return response to controllers
 *   @functions - getAll()
 *              - post()
 *              - update()
 *              - deleteBook()
 */

import { IBookDetails } from "../api/contollers/book.controller";
import Book from "../database/model/book.schema";
import { APIError } from "../errors/apiError";

/** Find list of books and return the response to controller */
const getAll = async () => {
    try {
        const response = await Book.find({});
        if (response && response.length > 0) {
            return response.reverse();
        }
    } catch (error) {
        throw new APIError("NOT FOUND", 200, `${error}`);
    }
};

/** Add book to database and return the response to controller */
const post = async ({ title, author, description }: IBookDetails) => {
    try {
        const newBookPost = new Book({
            title,
            author,
            description,
        });
        const response = await newBookPost.save();
        return response;
    } catch (error) {
        throw new APIError("DUPLICATE KEY", 200, `${error}`);
    }
};

/** Update book by its ID and return the response to controller */
const update = async ({ id, title, author, description }: IBookDetails) => {
    try {
        const option = {
            new: true,
        };
        const updatedData = await Book.findByIdAndUpdate(
            id,
            {
                title,
                author,
                description,
            },
            option
        );
        return updatedData;
    } catch (error) {
        throw new APIError("NOT UPDATE", 200, `${error}`);
    }
};

/** Delete book by its ID and return the response to controller */
const deleteBook = async (id: string) => {
    try {
        const response = await Book.findByIdAndDelete(id);
        return response;
    } catch (error) {
        throw new APIError("NOT DELETE", 200, `${error}`);
    }
};

export default {
    getAll,
    post,
    update,
    deleteBook,
};
