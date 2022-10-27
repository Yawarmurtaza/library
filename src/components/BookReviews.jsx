import { useState } from "react";

export default function BookReview() {
    const [searchBookTile, setSearchBookTitle] = useState("");

    function Search_Clicked() {
        console.log("search clicked!");
        console.log(searchBookTile);
    }
    return (<div className="row tab-content bg-transparent">
    
        <div className="input-group mb-3">
            <input onChange={event => setSearchBookTitle(event.target.value)} type="text" className="form-control" placeholder="Book title..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={() => Search_Clicked()}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>

    </div>

    );
}