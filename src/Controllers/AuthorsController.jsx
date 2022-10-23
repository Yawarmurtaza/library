import AuthorsEntityManager from "../EntityManagers/AuthorsEntityManager";

export default function AuthorsController() {
    const { allAuthors, authorsDataError, AddAuthorEntity } = AuthorsEntityManager();

    function AddNewAuthor(name) {
        return AddAuthorEntity(name);
    }

    return { allAuthors, authorsDataError, AddNewAuthor };
}