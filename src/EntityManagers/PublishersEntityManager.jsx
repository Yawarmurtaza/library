import GenericDataAccess from "../dataAccess/GenericDataAccess";
import publishers from "../data/publishers.json";
import { v4 as newGuid } from "uuid";

export default function PublishersEntityManager() {
    const { data: pubData, error: pubDataError, Add, Update, Delete } = GenericDataAccess(publishers);

    function AddPubEntity(name) {
        const id = newGuid();
        const newPub = { id, name, createDate: new Date().toLocaleDateString() };
        Add(newPub);
        return id;
    }

    return { pubData, pubDataError, AddPubEntity };
}