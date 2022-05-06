import { Skeleton, Stack } from "@mui/material";
import React, { FC } from "react";
//@ts-ignore
import styles from "./mainSkeleton.module.scss";

interface MainSkeletonProp {
  text: string;
}

const MainSceleton: FC<MainSkeletonProp> = ({ text }) => {
  return (
    <div className={`${styles.container} ${styles.sliders}`}>
      <div className={styles.popularBooks}>
        <div className={styles.topText}>
          <h3>{text}</h3>
        </div>

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
      </div>
    </div>
  );
};

export default MainSceleton;
