import { Rating } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { reviewSlice } from "../../store/slices/reviewSlice";
import { createReview } from "../../store/thunks/reviewThunk";
import styles from "./Review.module.scss";
import { useEffect } from "react";

const ReviewForm = () => {
  const dispatch = useAppDispatch();
  const { setLoadReview } = reviewSlice.actions;
  const { loadReview } = useAppSelector((state) => state.reviewReducer);
  const { userId, isCommented } = useAppSelector((state) => state.loginReducer);
  const validationSchema = yup.object().shape({
    rating: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
    comment: yup
      .string()
      .min(3, "Короткий")
      .max(150, "Длинный")
      .typeError("Должно быть строкой")
      .required("Обязательно"),
  });

  useEffect(() => {}, [loadReview]);

  if (isCommented) {
    return <h3>Raxmet pikir qaldirg'anin'z ushin</h3>;
  }

  return (
    <Formik
      initialValues={{ user_id: userId, rating: 1, comment: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(
          createReview({
            userId: userId,
            rating: values.rating,
            comment: values.comment,
          })
        );
        dispatch(setLoadReview(1));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className={styles.reviewForm}>
          <h3>Pikir qaldiriw</h3>
          <div className={styles.rating}>
            <Rating
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.rating}
              name="rating"
            />
          </div>
          {touched.rating && errors.rating}

          <textarea
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comment}
            name="comment"
            placeholder="comment"
          />
          {touched.comment && errors.comment}

          <button type="submit" className={styles.button}>
            Pikir jiberiw
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ReviewForm;
