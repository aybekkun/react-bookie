import Shimmer from "../../UI/skeleton/Shimmer";
import SkeletonElement from "../../UI/skeleton/SkeletonElement";
//@ts-ignore
import styles from "./categorySkeleton.module.scss";

const CategorySkeleton = () => {
  return (
    <div className={styles.booksList}>
      <div className={`skeleton-wrapper`}>
        <div className="skeleton-article">
          <SkeletonElement type="img" />
          <SkeletonElement type="nameBook" />
          <SkeletonElement type="authorBook" />
        </div>
        <Shimmer />
      </div>

      <div className={`skeleton-wrapper`}>
        <div className="skeleton-article">
          <SkeletonElement type="img" />
          <SkeletonElement type="nameBook" />
          <SkeletonElement type="authorBook" />
        </div>
        <Shimmer />
      </div>

      <div className={`skeleton-wrapper ${styles.swiperFirst}`}>
        <div className="skeleton-article">
          <SkeletonElement type="img" />
          <SkeletonElement type="nameBook" />
          <SkeletonElement type="authorBook" />
        </div>
        <Shimmer />
      </div>

      <div className={`skeleton-wrapper ${styles.swiperSecond}`}>
        <div className="skeleton-article">
          <SkeletonElement type="img" />
          <SkeletonElement type="nameBook" />
          <SkeletonElement type="authorBook" />
        </div>
        <Shimmer />
      </div>
    </div>
  );
};

export default CategorySkeleton;
