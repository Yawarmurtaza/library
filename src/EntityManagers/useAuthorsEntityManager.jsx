import authors from "../data/aurthors.json";
import useGenericDataAccess from "../dataAccess/useGenericDataAccess";
import { v4 as newGuid } from "uuid";

export default function useAuthorsEntityManager() {
    const { data: authorsData, error: authorsDataError, Add, Update, Delete } = useGenericDataAccess(authors);


    function AddAuthorEntity(name) {
        const id = newGuid();
        const newAuthor = { id, name, createDate: new Date().toLocaleDateString() };
        Add(newAuthor);
        return id;
    }

    return { authorsData, authorsDataError, AddAuthorEntity };

}