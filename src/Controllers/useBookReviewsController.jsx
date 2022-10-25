import useBookReviewsEntityManager from "../EntityManagers/useBookReviewsEntityManager";
import useBooksEntityManager from "../EntityManagers/useBooksEntityManager";

export default function useBookReviewsController() {
    const { bookReviewsData, bookReviewsDataError, AddBookReviewEntity } = useBookReviewsEntityManager();
    const { booksData, booksDataError, AddBookEntity, UpdateBookEntity, DeleteBookEntity } = useBooksEntityManager();

    function AddNewBookReview(bookName, numberOfStars) {
        const bookId = booksData.find(b => b.name === bookName);
        return AddBookReviewEntity(bookId, numberOfStars);
    }  
    console.log("Book Reviews Controller");
    return { bookReviewsData, bookReviewsDataError, AddNewBookReview };
}