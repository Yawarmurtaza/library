import { useContext } from "react";
import { PublisherContext } from "./App";
import Publisher from "./Publisher";

export default function Publishers() {
    const { pubsData } = useContext(PublisherContext);

    return (<div className="row tab-content bg-transparent note-has-grid">
        {pubsData.map(p => <Publisher publisher={p} key={p.id} />)}
    </div>);
}