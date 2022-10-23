import useAuthorsEntityManager from "../EntityManagers/useAuthorsEntityManager";

export default function useAuthorsController() {
    const { allAuthors, authorsDataError, AddAuthorEntity } = useAuthorsEntityManager();

    function AddNewAuthor(name) {
        return AddAuthorEntity(name);
    }  

    return { allAuthors, authorsDataError, AddNewAuthor };
}