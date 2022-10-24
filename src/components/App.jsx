import { createContext, useContext, useState } from "react";
import useAuthorsController from "../Controllers/useAuthorsController";
import useBookReviewsController from "../Controllers/useBookReviewsController";
import useBooksController from "../Controllers/useBooksController";
import usePublishersController from "../Controllers/usePublishersController";
import Authors from "./Authors";
import Books from "./books";
import MenuBar from "./MenuBar";
import Publishers from "./Publishers";

export const BookContext = createContext({
    booksData: [], booksDataError: "", AddNewBook: () => { }
});
export const AuthorContext = createContext({
    authorsData: [], authorsDataError: "", AddNewAuthor: () => { }
});
export const PublisherContext = createContext({
    pubsData: [], pubsDataError: "", AddPubEntity: () => { }
});
export const BookReviewContext = createContext({
    bookReviewsData: [], bookReviewsDataError: "", AddNewBookReview: () => { }
});
export default function App() {
    const [currentTabValue, setCurrentTabValue] = useState("Books"); // ["Books", "Aurthors"]
    const booksController = useBooksController();
    const authorsController = useAuthorsController();
    const publishersController = usePublishersController();
    const bookReviewConroller = useBookReviewsController();

    if (booksController.booksDataError) {
        return <div className="container">error: {booksDataError}</div>;
    }
    if (!booksController.booksData) {
        return <div className="container">Loading... Please wait</div>;
    }

    //console.log(bookReviewsData);

    return (
        <div className="container">
            <BookContext.Provider value={booksController}>
                <AuthorContext.Provider value={authorsController}>
                    <PublisherContext.Provider value={publishersController}>
                        <BookReviewContext.Provider value={bookReviewConroller}>
                            <MenuBar currentTab={currentTabValue} setCurrentTab={setCurrentTabValue} />
                            {currentTabValue == "Books" && <Books />}
                            {currentTabValue == "Aurthors" && <Authors />}
                            {currentTabValue == "Publishers" && <Publishers />}
                        </BookReviewContext.Provider>
                    </PublisherContext.Provider>
                </AuthorContext.Provider>
            </BookContext.Provider>
        </div>
    );
}