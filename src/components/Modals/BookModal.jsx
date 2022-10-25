import { useContext } from "react";
import { BookContext, BookModalContext } from "../App";
import BookBodyModal from "./BookBodyModal";

export default function BookModal() {

    const { displayModalDialogue, setDisplayModalDialogue,
        bookModalTitle, setBookModalTitle,
        bookModalAuthors, setBookModalAuthors,
        bookModalPub, setBookModalPub,
        bookModalPubDate, setbookModalPubDate,
        bookModalId } = useContext(BookModalContext);

    const { AddNewBook } = useContext(BookContext);

    function BookHeaderModal({ headerTitle }) {
        headerTitle = headerTitle === undefined ? "Add a new book" : headerTitle;
        return (<div>   <div className="modal-header bg-info text-white">
            <h5 className="modal-title text-white"><span>{headerTitle}</span> </h5>
            <button
                type="button"
                onClick={() => { setDisplayModalDialogue(false); }}
                className="close text-white"
                data-dismiss="modal"
                area-label="close">
                <span aria-hidden="true">x</span>
            </button>
        </div></div>);
    }

    function BookFooterModal() {
        /** 
         * cancel button
         * Save button: call save book using bookContext and close modal.
         */

        function SaveButton_Handler() {
            // title, authorNames, publisherName, publishDate
            AddNewBook(bookModalTitle, bookModalAuthors, bookModalPub, bookModalPubDate);
            console.log("save new book is called.");
        }

        return (<div>   <div className="modal-footer">
            {bookModalId === 0 && (
                <button className="float-left btn btn-success" onClick={() => { SaveButton_Handler(); setDisplayModalDialogue(false); }}> Save </button>
            )}
            <button className="btn btn-danger" data-dismiss="modal" onClick={() => setDisplayModalDialogue(false)}>Discard</button>
        </div></div>);
    }

    const cssShowHide = displayModalDialogue === true ? "modal show-modal" : "modal hide-modal";
    console.log("BookModal window component");
    return (
        <>
            <style jsx>{`.show-modal {display: block;}.hide-modal {display: none;}`}</style>
            <div role="dialog" className={cssShowHide}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <BookHeaderModal />
                        <BookBodyModal />
                        <BookFooterModal />
                    </div>
                </div>
            </div>
        </>
    );
}

