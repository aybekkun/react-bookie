import React, { FC } from "react";
import { getPagesArray } from "../../../utils/pages";
//@ts-ignore
import styles from "./pagination.module.scss";

interface PaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ page, changePage, totalPages }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className={styles.page__wrapper}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? `${styles.page} ${styles.page__current}` : styles.page}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
