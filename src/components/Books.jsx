import { useContext } from "react";
import { AuthorContext, BookContext, PublisherContext } from "./App";
import Book from "./Book";

export default function Books() {

    const { booksData } = useContext(BookContext);
    return (
        <div className="row tab-content bg-transparent note-has-grid">
            {booksData.map(book => <Book book={book} key={book.id} />)}
        </div>
    );
}