import { Space } from "antd";

const SpaceAntd = (props: any) => {
  const { children } = props || {};

  const inputProps = {
    children,
  };
  return <Space {...inputProps} />;
};

export default SpaceAntd;
