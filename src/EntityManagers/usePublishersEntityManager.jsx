import useGenericDataAccess from "../dataAccess/useGenericDataAccess";
import publishers from "../data/publishers.json";
import { v4 as newGuid } from "uuid";

export default function usePublishersEntityManager() {
    const { data: pubsData, error: pubsDataError, Add, Update, Delete } = useGenericDataAccess(publishers);

    function AddPubEntity(name) {
        const id = newGuid();
        const newPub = { id, name, createDate: new Date().toLocaleDateString() };
        Add(newPub);
        return id;
    }

    return { pubsData, pubsDataError, AddPubEntity };
}