export default function Publisher(props) {    
    return (<div className="col-md-4 single-note-item all-category">
        <div className="card card-body">
            <h5 className="note-title text-truncatew-75 mb-0">{props.publisher.name}</h5>

        </div>
    </div>
    );
}