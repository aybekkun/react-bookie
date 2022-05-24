import { FC } from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";
import "./skeletonElement.scss";

interface SkeletonVideoProps {
  theme: string;
}
const SkeletonVideo: FC<SkeletonVideoProps> = ({ theme }) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type="video" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonVideo;
