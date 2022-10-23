import { createContext, useContext, useState } from "react";
import useBooksController from "../Controllers/useBooksController";
import Aurthor from "./Aurthor";
import Books from "./books";
import MenuBar from "./MenuBar";

export const BookContext = createContext({
    allBooks: [], booksDataError: "", AddNewBook: () => { }
});


export default function App() {
    const [currentTabValue, setCurrentTabValue] = useState("Books"); // ["Books", "Aurthors"]
    const booksController = useBooksController();

    if(booksController.booksDataError){
        return <div className="container">error: {booksDataError}</div>;
    }
    if(!booksController.allBooks){
        return <div className="container">Loading... Please wait</div>;
    }

    return (
        <div className="container">
            <BookContext.Provider value={booksController}>
                <MenuBar currentTab={currentTabValue} setCurrentTab={setCurrentTabValue} />
                {currentTabValue == "Books" && <Books />}
                {currentTabValue == "Aurthor" && <Aurthor />}
            </BookContext.Provider>
        </div>
    );
}