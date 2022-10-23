import AuthorsEntityManager from "../EntityManagers/AuthorsEntityManager";
import BooksEntityManager from "../EntityManagers/BooksEntityManager";
import PublishersEntityManager from "../EntityManagers/PublishersEntityManager";

export default function BooksController() {
    const { allBooks, bookErrors, AddBookEntity, UpdateBookEntity, DeleteBookEntity } = BooksEntityManager();
    const { allAuthors, authorsDataError, AddAuthorEntity } = AuthorsEntityManager();
    const { pubData, pubDataError, AddPubEntity } = PublishersEntityManager();

    function AddNewBook(title, authorNames, publisherName, publishDate) {

        const publisherId = pubData ? pubData.find(p => p.name == publisherName).id : 0;

        console.log("pub id = " + publisherId);

        const authorNamesArray = authorNames ? authorNames.split(",").filter(name => name && name.length > 0) : [];
        const authorIds = allAuthors?.filter(a => authorNamesArray.includes(a.name)).map(a => a.id);

        console.log(authorIds);


        return AddBookEntity(title, authorIds, publisherId, publishDate);

    }

    return { allBooks, bookErrors, AddNewBook };
}