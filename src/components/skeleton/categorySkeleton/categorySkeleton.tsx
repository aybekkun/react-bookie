import { Skeleton, Stack } from "@mui/material";
import React from "react";
//@ts-ignore
import styles from "./categorySkeleton.module.scss";

const CategorySkeleton = () => {
  return (
    <div className={styles.booksList}>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={220} height={330} />
        <Skeleton variant="rectangular" width={150} height={25} />
        <Skeleton variant="rectangular" width={100} height={15} />
      </Stack>

      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={220} height={330} />
        <Skeleton variant="rectangular" width={150} height={25} />
        <Skeleton variant="rectangular" width={100} height={15} />
      </Stack>

      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={220} height={330} />
        <Skeleton variant="rectangular" width={150} height={25} />
        <Skeleton variant="rectangular" width={100} height={15} />
      </Stack>

      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={220} height={330} />
        <Skeleton variant="rectangular" width={150} height={25} />
        <Skeleton variant="rectangular" width={100} height={15} />
      </Stack>
    </div>
  );
};

export default CategorySkeleton;
