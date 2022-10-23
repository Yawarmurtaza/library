export default function Book(props) {
    return (<div className="col-md-4 single-note-item all-category">
        <div className="card card-body">
            <h5 className="note-title text-truncatew-75 mb-0">{props.book.title}</h5>
            
            <div className="note-content">
                <p className="note-inner-content text-muted">
                    {props.book.authorIds}
                </p>
                <p className="note-inner-content text-muted">
                <strong>Published by</strong>{ " " + props.book.publisherId}
                </p>
            </div>
            <p className="note-date font-12 text-muted">
                <strong>Published on</strong>{" " + new Date(props.book.publishDate).toLocaleTimeString("en", { year: "numeric", month: "long", day: "numeric" })}
            </p>
        </div>
    </div>
    );
}