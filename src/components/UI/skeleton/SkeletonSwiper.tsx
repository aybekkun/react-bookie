import { FC } from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";
import "./skeletonElement.scss";

interface SkeletonSwiperProps {
  theme: string;
}
const SkeletonSwiper: FC<SkeletonSwiperProps> = ({ theme }) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type="img" />
        <SkeletonElement type="nameBook" />
        <SkeletonElement type="authorBook" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonSwiper;
