import { useContext } from "react";
import { BookContext } from "./App";

export default function Publisher(props) {
    const { booksData } = useContext(BookContext);
    function PrintPBooksOfPublisher() {
        const currentPubId = props.publisher.id;
        let publishersBooks = [];
        booksData.forEach(book => {
            if (book.publisherId === currentPubId) {
                publishersBooks.push(book);
            }
        });

        let booksToPrint = [];
        publishersBooks.forEach(book => {

            booksToPrint.push(<li key={book.id}>{book.title}</li>);
        });

        return (booksToPrint);

    }

    return (<div className="col-md-4 single-note-item all-category">
        <div className="card card-body">
            <span className="side-stick"></span>
            <h5 className="note-title text-truncatew-75 mb-0">{props.publisher.name}</h5>
            <div className="note-content">
                <ul>
                    <PrintPBooksOfPublisher />
                </ul>
            </div>
        </div>
    </div>
    );
}