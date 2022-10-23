import books from "../data/books.json";
import useGenericDataAccess from "../dataAccess/useGenericDataAccess";
import { v4 as newGuid } from "uuid";

export default function useBooksEntityManager() {
    const { data: allBooks, error : booksDataError, Add, Update, Delete } = useGenericDataAccess(books);

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


    return { allBooks, booksDataError, AddBookEntity, UpdateBookEntity, DeleteBookEntity };

}