import { useContext } from "react";
import { AuthorContext, BookReviewContext, PublisherContext } from "./App";

export default function Book(props) {

    const { authorsData } = useContext(AuthorContext);
    const { pubsData } = useContext(PublisherContext);
    const { bookReviewsData } = useContext(BookReviewContext);

    function PrintStars() {
        const starCount = bookReviewsData?.find(review => review.bookId === props.book.id)?.stars;
        if (starCount) {
            const stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push(<i className="fa fa-star fa-hollow-black fa-lg text-warning" key={i}></i>);
            }

            return (
                <p className="note-inner-content text-secondary">{stars}</p>);
        }
        return;
    }

    function PrintAuthors() {
        const authNames = authorsData.filter(auth => props.book.authorIds.includes(auth.id)).map(a => a);
        if (authNames) {
            const authLinks = [];
            for (let i = 0; i < authNames.length; i++) {
                authLinks.push(<a href="#" onClick={() => { }} key={authNames[i].id}>{authNames[i].name}</a>);
                authLinks.push(" | ");
            }

            authLinks.pop();
            return (<p className="note-inner-content text-mute">{authLinks}</p>);
        }
    }

    return (<div className="col-md-4 single-note-item all-category">
        <div className="card card-body">
            <a href="https://www.amazon.ca/Introduction-Algorithms-Thomas-H-Cormen/dp/0262033844"  target="_blank">
            <h5 className="note-title text-truncatew-75 mb-0 text-info">{props.book.title}</h5>
            </a>

            <div className="note-content">
                <PrintAuthors />
                <p className="note-inner-content text-muted">
                    <strong>Published by</strong>{" " + pubsData.filter(p => p.id === props.book.publisherId).map(p => p.name)}
                </p>
            </div>
            <p className="note-date font-12 text-muted">
                <strong>Published on</strong>{" " + new Date(props.book.publishDate).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <div className="d-flex align-items-center">
                <span className="mr-2">{<PrintStars />}</span>
            </div>
            
            <div className="d-flex align-items-center">

                <span className="mr-2">
                    <i className="fa fa-edit fa-lg"></i>
                </span>
                <span className="mr-2">
                    <i className="fa fa-trash fa-lg text-danger"></i>
                </span>

            </div>
        </div>
    </div>
    );
}