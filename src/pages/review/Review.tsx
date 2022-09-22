import { Star, StarBorder } from "@material-ui/icons";
import { useEffect } from "react";
import ReviewSkeleton from "../../components/skeleton/reviewSkeleton/reviewSkeleton";
import Pagination from "../../components/UI/pagination/pagination";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { reviewSlice } from "../../store/slices/reviewSlice";
import { fetchReviews } from "../../store/thunks/reviewThunk";
import { IReviewData } from "../../types/review";
import styles from "./Review.module.scss";
import ReviewForm from "./reviewForm";


const Review = () => {
  const dispatch = useAppDispatch();
  const { setPageReviews } = reviewSlice.actions;
  const {
    reviews,
    page,
    loadReview,
    isLoading,
  } = useAppSelector((state) => state.reviewReducer);

  const getRatingContent = (rating: number) => {
    let content: JSX.Element[] = [];
    for (let i = 0; i < rating; i++) {
      content.push(<Star key={rating + i} />);
    }
    return content;
  };

  const getUnratingContent = (rating: number) => {
    let content: JSX.Element[] = [];
    for (let i = 0; i < rating; i++) {
      content.push(<StarBorder key={rating + i} />);
    }
    return content;
  };

  const changePage = (page: number) => {
    dispatch(setPageReviews(page));
  };

  useEffect(() => {
    dispatch(fetchReviews(page));
  }, [page, loadReview]);

  return (
    <div className={styles.review}>
     <ReviewForm/>

      {isLoading ? (
        <div className={styles.reviewBlock}>
          <ReviewSkeleton />
          <Pagination
            page={page}
            changePage={changePage}
            totalPages={reviews && reviews.last_page}
          />
        </div>
      ) : (
        <div className={styles.reviewBlock}>
          {reviews &&
            reviews?.data.map((item: IReviewData) => {
              return (
                <div className={styles.reviewElement} key={item.id}>
                  <div className={styles.info}>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.date}>{item.created_at}</span>
                  </div>
                  <div className={styles.ratingEl}>
                    {getRatingContent(item.rating)}
                    {getUnratingContent(5 - item.rating)}
                  </div>
                  <div className={styles.comment}>{item.comment}</div>
                </div>
              );
            })}

          <Pagination
            page={page}
            changePage={changePage}
            totalPages={reviews && reviews.last_page}
          />
        </div>
      )}
    </div>
  );
};

export default Review;
