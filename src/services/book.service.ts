import { IBookDetails } from "../api/contollers/book.controller";
import Book from "../database/model/book.schema";
import Logger from "../library/logger";

/** Find list of books and return the response to controller */
const getAll = async () => {
    try {
        const response = await Book.find({});
        return response;
    } catch (error) {
        Logger.error(`Error while Get All data,${error}`);
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
        Logger.error(`Error while Create data,${error}`);
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
        Logger.error(`Error while Update data, ${error}`);
    }
};

/** Delete book by its ID and return the response to controller */
const deleteBook = async (id: string) => {
    try {
        const response = await Book.findByIdAndDelete(id);
        return response;
    } catch (error) {
        Logger.error(`Unable to delete, ${error}`);
    }
};

export default {
    getAll,
    post,
    update,
    deleteBook,
};
