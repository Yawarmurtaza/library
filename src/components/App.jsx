import { useState } from "react";
import Aurthor from "./Aurthor";
import Books from "./books";
import MenuBar from "./MenuBar";

export default function App() {
    const [currentTabValue, setCurrentTabValue] = useState("Books"); // ["Books", "Aurthors"]

    

    return (
        <div className="container">
            <MenuBar currentTab={currentTabValue} setCurrentTab={setCurrentTabValue} />
            <Books />
            <Aurthor />
        </div>
    );
}