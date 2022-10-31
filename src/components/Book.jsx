import { useContext, useState } from "react";
import { AuthorContext, BookReviewContext, PublisherContext } from "./App";

export default function Book(props) {

    const { authorsData } = useContext(AuthorContext);
    const { pubsData } = useContext(PublisherContext);
    const { bookReviewsData, UpdateBookReview } = useContext(BookReviewContext);
    const [updateInProgress, setUpdateInProgress] = useState(false);

    function Star_Clicked(id, bookId, stars, originalStars) {
        setUpdateInProgress(true);
        
        if (originalStars === 1 && stars === 0) {
            stars = -1;
        }

        
        UpdateBookReview(id, bookId, stars + 1);
        setUpdateInProgress(false);
    }

    function PrintStars() {
        const review = bookReviewsData?.find(review => review.bookId === props.book.id);

        if (review) {
            const stars = [];

            for (let i = 0; i < review.stars; i++) {
                stars.push(<i className="fa fa-star fa-hollow-black fa-lg text-warning" key={i}
                    onClick={() => Star_Clicked(review.id, props.book.id, i, review.stars)}></i>);
            }
            for (let i = review.stars; i < 5; i++) {
                stars.push(<i className="fa fa-star fa-hollow-black fa-lg" key={i}
                    onClick={() => Star_Clicked(review.id, props.book.id, i, review.stars)}></i>);
            }
            return (<p className="note-inner-content text-secondary">{stars}</p>);
        }
        return;
    }

    function PrintAuthors() {
        const bookAuthors = authorsData.filter(auth => props.book.authorIds.includes(auth.id));
        if (bookAuthors) {
            const authLinks = [];
            bookAuthors.forEach(auth => {
                authLinks.push(<a href="#" onClick={() => { }} key={auth.id}>{auth.name}</a>);
                authLinks.push(" | ");
            });
            authLinks.pop();
            return (<p className="note-inner-content text-mute">{authLinks}</p>);
        }
    }

    return (<div className="col-md-4 single-note-item all-category">

        <div className="card card-body">
            <span className="side-stick"></span>
            <a href="#">
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
                {updateInProgress === true ? <span className="fas fa-circle-notch fa-spin"></span> : null}
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