import { FC } from "react";
import './skeletonElement.scss';

interface SkeletonElementProps {
  type: string;
}

const SkeletonElement: FC<SkeletonElementProps> = ({type}) => {
  const classses = `skeleton ${type}`

  return (
    <div className={classses}></div>
  )
}

export default SkeletonElement;