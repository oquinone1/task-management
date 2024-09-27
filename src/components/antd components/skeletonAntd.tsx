import { Skeleton } from "antd";

const SkeletonAntd = (props: any) => {
  const { node, style, active, children, paragraph } = props || {};

  const inputProps = {
    style,
    active,
    children,
    paragraph,
  };

  if (node) {
    return <Skeleton.Node {...inputProps} />;
  }
  return <Skeleton {...inputProps} />;
};

export default SkeletonAntd;
