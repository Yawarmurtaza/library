import bookReviews from "../data/bookReviews.json";
import useGenericDataAccess from "../dataAccess/useGenericDataAccess";
import { v4 as newGuid } from "uuid";

export default function useAuthorsEntityManager() {
    const { data: bookReviewsData, error: bookReviewsDataError, Add, Update, Delete } = useGenericDataAccess(bookReviews);


    function AddBookReviewEntity(bookId, numberOfStars) {
        const id = newGuid();
        const newReview = { id, bookId, numberOfStars, createDate: new Date().toLocaleDateString() };
        Add(newReview);
        return id;
    }

    return { bookReviewsData, bookReviewsDataError, AddBookReviewEntity };

}