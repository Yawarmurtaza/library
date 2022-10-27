import useBookReviewsEntityManager from "../EntityManagers/useBookReviewsEntityManager";
import useBooksEntityManager from "../EntityManagers/useBooksEntityManager";

export default function useBookReviewsController() {
    const { bookReviewsData, bookReviewsDataError, AddBookReviewEntity, UpdateBookReviewEntity } = useBookReviewsEntityManager();
    
    function AddNewBookReview(bookId, stars) {
        return AddBookReviewEntity(bookId, stars);
    }  

    function UpdateBookReview(id, bookId, stars){
        UpdateBookReviewEntity(id, bookId, stars);
    }
    
    return { bookReviewsData, bookReviewsDataError, AddNewBookReview, UpdateBookReview};
}