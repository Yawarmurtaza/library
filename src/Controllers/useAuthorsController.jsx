import useAuthorsEntityManager from "../EntityManagers/useAuthorsEntityManager";

export default function useAuthorsController() {
    const { authorsData, authorsDataError, AddAuthorEntity } = useAuthorsEntityManager();

    function AddNewAuthor(name) {
        return AddAuthorEntity(name);
    }  

    return { authorsData, authorsDataError, AddNewAuthor };
}