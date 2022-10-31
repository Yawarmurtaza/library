import { useContext, useState } from "react";
import { BookContext, BookReviewContext } from "./App";

export default function BookReview() {
    const [searchBookTile, setSearchBookTitle] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [bookReview, setBookReview] = useState();
    const [shouldPrintBookReview, setShouldPrintBookReview] = useState(false);

    const { booksData } = useContext(BookContext);
    const { bookReviewsData } = useContext(BookReviewContext);

    function Search_Clicked() {
        console.log("search clicked!");
        console.log(searchBookTile);

        const book = booksData.find(b => b.title === "Introduction to Algorithms");
        const review = bookReviewsData.find(r => r.bookId === book.id);
        setBookReview(review);
        setBookTitle(book.title);

        // setShouldPrintBookReview(true);
    }

    function PrintStars(starsToPrint) {
        console.log(starsToPrint);
        const stars = [];
        let i = 0;
        //for (let i = 0; i < starsToPrint; i++) {
        stars.push(<i className="fa fa-star fa-hollow-black fa-lg text-warning" key={i}></i>);
        //}
        
        //for (let i = starsToPrint; i < 5; i++) {
        stars.push(<i className="fa fa-star fa-hollow-black fa-lg" key={i}></i>);
        //}

        console.log(stars);
        return (stars);
    }

    function PrintBookReview() {

        let reviewUI = [];
        let key = 0;

        const reviews = bookReview?.userReviews;
        const userStars = reviews ? Object.fromEntries(reviews.map(({userName, stars}) => [userName, stars])) : [];
        console.log("userStars");

        

        bookReview?.userReviews.forEach(userReview => {
            key = key + 0;
            reviewUI.push(
                <p className="note-date font-12 text-muted" key={key}>{userReview.userName}
                    {/* <PrintStars starsToPrint={userReview.stars} /> */}
                </p>

            );
        });

        return (reviewUI);
    }


    return (<>
        <div className="input-group mb-3">
            <input onChange={event => setSearchBookTitle(event.target.value)} type="text" className="form-control" placeholder="Book title..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={() => Search_Clicked()}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
        <style jsx>{`.show-modal {display: block;}.hide-modal {display: none;}`}</style>
        <div className="cssShowHide">
            <h5 className="note-title text-truncatew-75 mb-0 text-info">{bookTitle}</h5>
            <PrintBookReview />

        </div>
    </>);
}