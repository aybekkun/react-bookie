import CategorySkeleton from "../categorySkeleton/categorySkeleton";
import SkeletonElement from "./../../UI/skeleton/SkeletonElement";
import styles from "./bookDetailSkeleton.module.scss";

const BookDetailSkeleton = () => {
  return (
    <div className={styles.bookDetail}>
      <div className={styles.bookInfo}>
        <div className={styles.bookHeader}>
          <SkeletonElement type="textBookDetail" />
        </div>

        <div className={styles.bookBody}>
          <SkeletonElement type="imgBookDetail" />
          <SkeletonElement type="description" />
        </div>
      </div>

      <div className={styles.bookAudio}>
        <SkeletonElement type="audioBookDetail" />

        <SkeletonElement type="audioBookDetail" />
      </div>

      <CategorySkeleton />
    </div>
  );
};

export default BookDetailSkeleton;
