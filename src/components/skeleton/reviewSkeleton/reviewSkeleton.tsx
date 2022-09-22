import Shimmer from "../../UI/skeleton/Shimmer";
import SkeletonElement from "../../UI/skeleton/SkeletonElement";
import styles from "./reviewSkeleton.module.scss";

const ReviewSkeleton = () => {
  return (
    <div className={styles.reviewSkeleton}>
      <div className={`${styles.reviews} skeleton-wrapper`}>
        <div className="skeleton-article">
          <SkeletonElement type="review" />
        </div>
        <Shimmer />
      </div>

      <div className={`${styles.reviews} skeleton-wrapper`}>
        <div className="skeleton-article">
          <SkeletonElement type="review" />
        </div>
        <Shimmer />
      </div>

      <div className={`${styles.reviews} skeleton-wrapper`}>
        <div className="skeleton-article">
          <SkeletonElement type="review" />
        </div>
        <Shimmer />
      </div>

      <div className={`${styles.reviews} skeleton-wrapper`}>
        <div className="skeleton-article">
          <SkeletonElement type="review" />
        </div>
        <Shimmer />
      </div>

      <div className={`${styles.reviews} skeleton-wrapper`}>
        <div className="skeleton-article">
          <SkeletonElement type="review" />
        </div>
        <Shimmer />
      </div>
    </div>
  );
};

export default ReviewSkeleton;
