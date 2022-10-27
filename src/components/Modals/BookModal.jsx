import { useContext } from "react";
import { AuthorContext, BookContext, BookModalContext, BookReviewContext, PublisherContext } from "../App";
import BookBodyModal from "./BookBodyModal";

export default function BookModal() {

    const { displayModalDialogue, setDisplayModalDialogue,
        bookModalTitle,
        bookModalAuthors,
        bookModalPub,
        bookModalPubDate,
        bookModalId } = useContext(BookModalContext);

    const { AddNewBook } = useContext(BookContext);
    const { authorsData, AddNewAuthor } = useContext(AuthorContext);
    const { AddNewPublisher } = useContext(PublisherContext);
    const { AddNewBookReview } = useContext(BookReviewContext);

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

        function SaveButton_Clicked() {
            const newPubId = AddNewPublisher(bookModalPub);
            const authorNamesArray = bookModalAuthors ?
                bookModalAuthors.split(",").filter(name => name && name.length > 0)
                    .map(name => name.trim()) :
                [];

            const existingAuthorNames = authorsData.map(a => a.name);
            const newAuthNames = authorNamesArray.filter(name => !existingAuthorNames.includes(name)) + "";
            const newAuthNamesArray = newAuthNames.split(",");
            let newAuthIds = [];
            newAuthNamesArray.forEach(name => {
                name = name.trim();
                if (name.length > 0 && name !== undefined) {
                    newAuthIds.push(AddNewAuthor(name));
                }
            });

            const authorIds = authorsData?.filter(a => authorNamesArray.includes(a.name)).map(a => a.id);
            const allAuthIds = [...authorIds, ...newAuthIds];
            const newBookId = AddNewBook(bookModalTitle, allAuthIds, newPubId, bookModalPubDate);
            AddNewBookReview(newBookId, 0);
        }

        return (<div>
            <div className="modal-footer">
                {bookModalId === 0 && (
                    <button className="float-left btn btn-success" onClick={() => { SaveButton_Clicked(); setDisplayModalDialogue(false); }}> Save </button>
                )}
                <button className="btn btn-danger" data-dismiss="modal" onClick={() => setDisplayModalDialogue(false)}>Discard</button>
            </div>
        </div>);
    }

    const cssShowHide = displayModalDialogue === true ? "modal show-modal" : "modal hide-modal";
    return (<>
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
    </>);
}