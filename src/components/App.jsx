import { useState } from "react";
import Aurthor from "./Aurthor";
import Books from "./books";
import MenuBar from "./MenuBar";

export default function App() {
    const [currentTab, setCurrentTab] = useState("Books"); // ["Books", "Aurthors"]


    return (
        <div className="container">
            <MenuBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <Books />
            <Aurthor />
        </div>
    );
}