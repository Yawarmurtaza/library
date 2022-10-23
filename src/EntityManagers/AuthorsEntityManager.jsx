import authors from "../data/aurthors.json";
import GenericDataAccess from "../dataAccess/GenericDataAccess";
import { v4 as newGuid } from "uuid";

export default function AuthorsEntityManager() {
    const { data: allAuthors, error: authorsDataError, Add, Update, Delete } = GenericDataAccess(authors);


    function AddAuthorEntity(name) {
        const id = newGuid();
        const newAuthor = { id, name, createDate: new Date().toLocaleDateString() };
        Add(newAuthor);
        return id;
    }

    return { allAuthors, authorsDataError, AddAuthorEntity };

}