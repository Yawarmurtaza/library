import books from "../data/books.json";
import useGenericDataAccess from "../dataAccess/useGenericDataAccess";
import { v4 as newGuid } from "uuid";

export default function useBooksEntityManager() {
    const { data: booksData, error : booksDataError, Add, Update, Delete } = useGenericDataAccess(books);

    function AddBookEntity(title, authorIds, publisherId, publishDate) {
        const id = newGuid();
        const newBook = {
            id, title, authorIds, publisherId, publishDate, createDate: new Date().toLocaleDateString()
        };
        console.log("Inside AddBookEntity: newBook AuthIds= " + newBook.authorIds + " Publisher Id" + newBook.publisherId);
        Add(newBook);
        return id;
    }

    function UpdateBookEntity(bookId, book) {

    }

    function DeleteBookEntity(bookId) {
        Delete(bookId);
    }

    console.log("Books entity manager");

    return { booksData, booksDataError, AddBookEntity, UpdateBookEntity, DeleteBookEntity };

}