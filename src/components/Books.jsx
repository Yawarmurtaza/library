import BooksController from "../Controllers/BooksController";
import BooksEntityManager from "../EntityManagers/BooksEntityManager";

export default function Books() {

    const { allBooks, bookErrors, AddNewBook } = BooksController();

    if (allBooks) { console.log(allBooks); }

    function AddNewBook2() {
        const authorNames = "Gamma,Johnson, Helm  ";
        const publisherId = "wrox";
        const publishDate = "2005-01-05";
        const title = "C# via CLR";

        const bookId = AddNewBook(title, authorNames, publisherId, publishDate);
        console.log("new bookid = " + bookId);
    }

    if(allBooks?.length < 4)
    {AddNewBook2();}
   
    return (
        <div className="col-md-4 single-note-item all-category">
              <div className="card card-body">
            <span className="textbox-tag">
                <button className="btn btn-info">Add Book</button>
                </span>
            </div>
        </div>
    );
}