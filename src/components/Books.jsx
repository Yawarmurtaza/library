import { useContext } from "react";
import { AuthorContext, BookContext, PublisherContext } from "./App";
import Book from "./Book";
import BookModal from "./Modals/BookModal";

export default function Books() {
    const { booksData } = useContext(BookContext);    
    console.log("Books component");
    return (
        <>
            {booksData && <BookModal />}
            <div className="row tab-content bg-transparent note-has-grid">
                {booksData.map(book => <Book book={book} key={book.id} />)}
            </div>
        </>
    );
}