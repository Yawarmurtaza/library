import useAuthorsEntityManager from "../EntityManagers/useAuthorsEntityManager";
import useBooksEntityManager from "../EntityManagers/useBooksEntityManager";
import usePublishersEntityManager from "../EntityManagers/usePublishersEntityManager";

export default function useBooksController() {
    const { booksData, booksDataError, AddBookEntity, UpdateBookEntity, DeleteBookEntity } = useBooksEntityManager();
    const { authorsData, authorsDataError, AddAuthorEntity } = useAuthorsEntityManager();
    const { pubsData, pubsDataError, AddPubEntity } = usePublishersEntityManager();

    function AddNewBook(title, authorNames, publisherName, publishDate) {
        const publisherId = pubsData ? pubsData.find(p => p.name == publisherName.trim()).id : 0;
        if (publisherId === 0) {
            throw new Error("invalid publisher name.");
        }
        const authorNamesArray = authorNames ?
            authorNames.split(",").filter(name => name && name.length > 0)
                .map(name => name.trim()) : 
                [];
                
        const authorIds = authorsData?.filter(a => authorNamesArray.includes(a.name)).map(a => a.id);
        return AddBookEntity(title, authorIds, publisherId, publishDate);
    }
    console.log("Books Controller");
    return { booksData, booksDataError, AddNewBook };
}