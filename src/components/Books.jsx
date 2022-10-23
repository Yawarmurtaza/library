import { useContext } from "react";
import { BookContext } from "./App";
import Book from "./Book";

export default function Books() {

    const { allBooks, booksDataError, AddNewBook } = useContext(BookContext);

    if (allBooks) { console.log(allBooks); }

    // function AddNewBook2() {
    //     const authorNames = "Gamma,Johnson, Helm  ";
    //     const publisherId = "wrox";
    //     const publishDate = "2005-01-05";
    //     const title = "C# via CLR";

    //     const bookId = AddNewBook(title, authorNames, publisherId, publishDate);
    //     console.log("new bookid = " + bookId);
    // }

    // if (allBooks?.length < 4) { AddNewBook2(); }

    return (
        <div className="row tab-content bg-transparent note-has-grid">
            {allBooks.map(book => <Book book={book} key={book.id}/>)}
        </div>
    );
}