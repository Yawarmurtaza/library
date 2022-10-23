import books from "../data/books.json";
import GenericDataAccess from "../dataAccess/GenericDataAccess";
import { v4 as newGuid } from "uuid";

export default function BooksEntityManager() {
    const { data: allBooks, error : bookErrors, Add, Update, Delete } = GenericDataAccess(books);

    function AddBookEntity(title, authorIds, publisherId, publishDate) {
        const id = newGuid();
        const newBook = {
            id, title, authorIds, publisherId, publishDate, createDate: new Date().toLocaleDateString()
        };
        Add(newBook);
        return id;
    }

    function UpdateBookEntity(bookId, book) {

    }

    function DeleteBookEntity(bookId) {
        Delete(bookId);
    }


    return { allBooks, bookErrors, AddBookEntity, UpdateBookEntity, DeleteBookEntity };

}