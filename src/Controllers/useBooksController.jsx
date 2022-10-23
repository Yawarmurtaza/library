import useAuthorsEntityManager from "../EntityManagers/useAuthorsEntityManager";
import useBooksEntityManager from "../EntityManagers/useBooksEntityManager";
import usePublishersEntityManager from "../EntityManagers/usePublishersEntityManager";

export default function useBooksController() {
    const { allBooks, booksDataError, AddBookEntity, UpdateBookEntity, DeleteBookEntity } = useBooksEntityManager();
    const { allAuthors, authorsDataError, AddAuthorEntity } = useAuthorsEntityManager();
    const { pubsData, pubsDataError, AddPubEntity } = usePublishersEntityManager();

    function AddNewBook(title, authorNames, publisherName, publishDate) {
        const publisherId = pubsData ? pubsData.find(p => p.name == publisherName).id : 0;
        if (publisherId === 0) {
            throw new Error("invalid publisher name.");
        }
        const authorNamesArray = authorNames ? authorNames.split(",").filter(name => name && name.length > 0) : [];
        const authorIds = allAuthors?.filter(a => authorNamesArray.includes(a.name)).map(a => a.id);
        return AddBookEntity(title, authorIds, publisherId, publishDate);
    }

    return { allBooks, booksDataError, AddNewBook };
}