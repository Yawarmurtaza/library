import { useState } from "react";

export default function useBookModalController() {

    const [displayModalDialogue, setDisplayModalDialogue] = useState(false);

    const [bookModalTitle, setBookModalTitle] = useState("");
    const [bookModalAuthors, setBookModalAuthors] = useState([]);
    const [bookModalPub, setBookModalPub] = useState("");
    const [bookModalPubDate, setBookModalPubDate] = useState("");
    const [bookModalId, setBookModalId] = useState(0);
    return {
        displayModalDialogue, setDisplayModalDialogue,
        bookModalTitle, setBookModalTitle,
        bookModalAuthors, setBookModalAuthors,
        bookModalPub, setBookModalPub,
        bookModalPubDate, setBookModalPubDate,                     
        bookModalId, setBookModalId,
    };
}