import { Star, StarBorder } from "@material-ui/icons";
import { Rating } from "@mui/material";
import { FormikErrors, useFormik } from "formik";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  createReview,
  CreateReviewProps,
  fetchReviews,
} from "../../store/actionCreators/reviewActionCreator";
import Pagination from "../UI/pagination/pagination";
import { IReviewsData, reviewSlice } from "./../../store/slices/reviewSlice";
//@ts-ignore
import styles from "./Review.module.scss";

const Review = () => {
  const dispatch = useAppDispatch();
  const { setPageReviews } = reviewSlice.actions;
  const { reviews, page, isLoading, error } = useAppSelector(
    (state) => state.reviewReducer
  );

  const getRatingContent = (rating: number) => {
    let content = [];
    for (let i = 0; i < rating; i++) {
      content.push(<Star key={rating + i} />);
    }
    return content;
  };

  const getUnratingContent = (rating: number) => {
    let content = [];
    for (let i = 0; i < rating; i++) {
      content.push(<StarBorder key={rating + i} />);
    }
    return content;
  };

  const changePage = (page: number) => {
    dispatch(setPageReviews(page));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      comment: "",
      phone: "",
      rating: 1,
    },
    onSubmit: (values) => {
      dispatch(
        createReview({
          name: values.name,
          comment: values.comment,
          phone: values.phone,
          rating: values.rating,
        })
      );
    },
    validate: (values) => {
      const errors: FormikErrors<CreateReviewProps> = {};

      if (!values.name) {
        errors.name = "Enter your login";
      } else if (!values.comment) {
        errors.comment = "comment is required";
      } else if (!/^[0-9]+$/.test(values.phone)) {
        errors.phone = "phone is required";
      } else if (!values.rating){
        errors.rating = "rating is required"
      } return errors;
    },
  });

  useEffect(() => {
    dispatch(fetchReviews(page));
  }, [page]);

  return (
    <div className={styles.review}>
      <form onSubmit={formik.handleSubmit} className={styles.reviewForm}>
        <h3>Pikir qaldiriw</h3>
        <div className={styles.userInfo}>
          <input
            type="text"
            placeholder="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.dirty && formik.errors.name && (
            <div className={styles.errorField}>{formik.errors.name}</div>
          )}

          <input
            type="text"
            placeholder="phone"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.dirty && formik.errors.phone && (
            <div className={styles.errorField}>{formik.errors.phone}</div>
          )}
        </div>

        <div className={styles.rating}>
          <Rating {...formik.getFieldProps("rating")} />
        </div>
        {formik.touched.rating && formik.dirty && formik.errors.rating && (
          <div className={styles.errorField}>{formik.errors.rating}</div>
        )}

        <textarea
          placeholder="comment"
          {...formik.getFieldProps("comment")}
          rows={5}
          cols={40}
        />
        {formik.touched.comment && formik.dirty && formik.errors.comment && (
          <div className={styles.errorField}>{formik.errors.comment}</div>
        )}

        <button type="submit" className={styles.button}>
          Pikir jiberiw
        </button>
        {error ? <div>{error}</div> : ""}
      </form>

      <div className={styles.reviewBlock}>
        {reviews?.data.map((item: IReviewsData, index: number) => {
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
    </div>
  );
};

export default Review;
