import useAuthorsEntityManager from "../EntityManagers/useAuthorsEntityManager";

export default function useAuthorsController() {
    const { authorsData, authorsDataError, AddAuthorEntity } = useAuthorsEntityManager();

    function AddNewAuthor(name) {
        return AddAuthorEntity(name);
    }  
    console.log("Authors Controller");
    return { authorsData, authorsDataError, AddNewAuthor };
}