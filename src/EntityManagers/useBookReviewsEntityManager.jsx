import bookReviews from "../data/bookReviews.json";
import useGenericDataAccess from "../dataAccess/useGenericDataAccess";
import { v4 as newGuid } from "uuid";

export default function useBookReviewsEntityManager() {
    const { data: bookReviewsData, error: bookReviewsDataError, Add, Update, Delete } = useGenericDataAccess(bookReviews);
    function AddBookReviewEntity(bookId, stars) {
        const id = newGuid();
        const newReview = { id, bookId, stars, createDate: new Date().toLocaleDateString() };
        Add(newReview);
        return id;
    }

    function UpdateBookReviewEntity(id, bookId, stars){
        const updatedReview = {id, bookId, stars};
        Update(id, updatedReview);
    }

    return { bookReviewsData, bookReviewsDataError, AddBookReviewEntity, UpdateBookReviewEntity };

}