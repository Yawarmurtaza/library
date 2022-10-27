import { useContext } from "react";
import { BookContext } from "./App";

export default function Author(props) {

    const { booksData } = useContext(BookContext);
    
    function PrintBooksForAuthor() {
        const currentAuthId = props.author.id;
        let booksByAuthor = [];
        booksData.forEach(book => {

            if (book.authorIds.includes(currentAuthId)) {

                booksByAuthor.push(book);
            }

        });

        let bookNames = [];
        booksByAuthor.forEach(book => {
            bookNames.push(<li key={book.id}> {book.title} </li>);
        });

        return (bookNames);
    }

    return (<div className="col-md-4 single-note-item all-category">
        <div className="card card-body">
            <h5 className="note-title text-truncatew-75 mb-0">{props.author.name}</h5>
            <div className="note-content">
                <ul>
                    <PrintBooksForAuthor />
                </ul>
            </div>

        </div>
    </div>
    );
}