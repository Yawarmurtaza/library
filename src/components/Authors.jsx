import { useContext } from "react";
import { AuthorContext } from "./App";
import Author from "./Author";

export default function Authors() {

    const { authorsData, authorsDataError, AddNewAuthor } = useContext(AuthorContext);
    console.log("Authors component!");
    
    if(authorsData.length < 18)
    {AddNewAuthor("a new dummy author");}

    return (
        <div className="row tab-content bg-transparent note-has-grid">
            {authorsData.map(author => <Author author={author} key={author.id} />)}
        </div>
    );
}