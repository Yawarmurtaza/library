import useBooksEntityManager from "../EntityManagers/useBooksEntityManager";

export default function useBooksController() {
    const { booksData, booksDataError, AddBookEntity, UpdateBookEntity, DeleteBookEntity } = useBooksEntityManager();
    function AddNewBook(title, authorIds, publisherId, publishDate) {      
        return AddBookEntity(title, authorIds, publisherId, publishDate);
    }
    
    return { booksData, booksDataError, AddNewBook };
}