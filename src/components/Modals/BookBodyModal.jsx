import { useContext } from "react";
import { BookContext, BookModalContext } from "../App";

export default function BookBodyModal() {

    const { displayModalDialogue, setDisplayModalDialogue,
        bookModalTitle, setBookModalTitle,
        bookModalAuthors, setBookModalAuthors,
        bookModalPub, setBookModalPub,
        bookModalPubDate, setBookModalPubDate,
        bookModalId } = useContext(BookModalContext);

    return (<div>   <div className="modal-body">
        <div className="notes-box">
            <div className="notes-content">
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="note-title">
                                <label>Title</label>
                                <input
                                    className="form-control"
                                    placeholder="Title"
                                    value={bookModalTitle}
                                    onChange={event => setBookModalTitle(event.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="note-title">
                                <label>Author(s)</label>
                                <input type="text"
                                    className="form-control"
                                    value={bookModalAuthors}
                                    onChange={event => setBookModalAuthors(event.target.value)}
                                    placeholder="Author names" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="note-title">
                                <label>Publisher</label>
                                <input type="text"
                                    className="form-control"
                                    value={bookModalPub}
                                    onChange={event => setBookModalPub(event.target.value)}
                                    placeholder="Publisher name" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="note-title">
                                <label>Publish Date(s)</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="publish date"
                                    value={bookModalPubDate}
                                    onChange={e => setBookModalPubDate(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>);
}