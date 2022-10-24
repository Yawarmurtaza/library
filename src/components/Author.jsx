export default function Author(props) {
    return (<div className="col-md-4 single-note-item all-category">
        <div className="card card-body">
            <h5 className="note-title text-truncatew-75 mb-0">{props.author.name}</h5>

        </div>
    </div>
    );
}