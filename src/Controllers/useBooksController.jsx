import useAuthorsEntityManager from "../EntityManagers/useAuthorsEntityManager";
import useBooksEntityManager from "../EntityManagers/useBooksEntityManager";
import usePublishersEntityManager from "../EntityManagers/usePublishersEntityManager";
import useAuthorsController from "./useAuthorsController";
import usePublishersController from "./usePublishersController";

export default function useBooksController() {
    const { booksData, booksDataError, AddBookEntity, UpdateBookEntity, DeleteBookEntity } = useBooksEntityManager();
    const { authorsData, authorsDataError, AddNewAuthor } = useAuthorsController();
    const { pubsData, pubsDataError, AddNewPublisher } = usePublishersController();

    function AddNewBook(title, authorIds, publisherId, publishDate) {      
        return AddBookEntity(title, authorIds, publisherId, publishDate);
    }
    
    return { booksData, booksDataError, AddNewBook };
}