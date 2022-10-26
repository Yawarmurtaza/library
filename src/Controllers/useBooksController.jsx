import useAuthorsEntityManager from "../EntityManagers/useAuthorsEntityManager";
import useBooksEntityManager from "../EntityManagers/useBooksEntityManager";
import usePublishersEntityManager from "../EntityManagers/usePublishersEntityManager";
import useAuthorsController from "./useAuthorsController";
import usePublishersController from "./usePublishersController";

export default function useBooksController() {
    const { booksData, booksDataError, AddBookEntity, UpdateBookEntity, DeleteBookEntity } = useBooksEntityManager();
    const { authorsData, authorsDataError, AddNewAuthor } = useAuthorsController();
    const { pubsData, pubsDataError, AddNewPublisher } = usePublishersController();

    function AddNewBook(title, authorNames, publisherName, publishDate) {
        let publisherId = pubsData ? pubsData.find(p => p.name == publisherName.trim())?.id : undefined;
        if (publisherId === undefined) {
           publisherId = AddNewPublisher(publisherName);
        }

        const newPub = pubsData.find(p => p.id === publisherId);
        console.log(newPub);

        const authorNamesArray = authorNames ?
            authorNames.split(",").filter(name => name && name.length > 0)
                .map(name => name.trim()) :
            [];

        const existingAuthorNames = authorsData.map(a => a.name);

        const newAuthNames =  authorNamesArray.filter(name => !existingAuthorNames.includes(name)) + "";
        console.log("New Auth Names = " + newAuthNames);
        const newAuthNamesArray = newAuthNames.split(",");
        let newAuthIds = [];
        newAuthNamesArray.forEach(name => {
            newAuthIds.push(AddNewAuthor(name));
        });
        
        const authorIds = authorsData?.filter(a => authorNamesArray.includes(a.name)).map(a => a.id);
        authorIds.push(newAuthIds);
        console.log("authorIds = " + authorIds);
        return AddBookEntity(title, authorIds, publisherId, publishDate);
    }
    console.log("Books Controller");
    return { booksData, booksDataError, AddNewBook };
}