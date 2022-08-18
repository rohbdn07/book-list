import mongoose, { Document, Schema } from "mongoose";

export interface IBook {
    title: string;
    author: string;
    description: string;
}

export interface IBookModal extends IBook, Document {}

//Schema represent the database's structure and it's contents.
const BookSchema = mongoose.Schema;

const bookSchema: Schema = new BookSchema({
    title: {
        type: String,
        unique: true,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
});

const Book = mongoose.model<IBookModal>("Book", bookSchema);

export default Book;
