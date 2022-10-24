import { useContext } from "react";
import { AuthorContext, BookContext, PublisherContext } from "./App";
import Book from "./Book";

export default function Books() {

    const { booksData, booksDataError, AddNewBook } = useContext(BookContext);
    
    // if (booksData) { console.log(booksData); }

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
            {booksData.map(book => <Book book={book} key={book.id} />)}
        </div>
    );
}