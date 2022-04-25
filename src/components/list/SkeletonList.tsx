import { Fragment } from "react";

type SkeletonListProps = {
  total: number;
  name: string;
  children: React.ReactNode;
};

const SkeletonList = ({ total, name, children }: SkeletonListProps) => {
  let array = [];
  for (let i = 0; i < total; i++) {
    array.push(i);
  }
  return (
    <>
      {array.map((index) => (
        <Fragment key={name + index}>{children}</Fragment>
      ))}
    </>
  );
};

export default SkeletonList;
