import { Spin } from "antd";

const SpinAntd = () => {
  const inputProps: any = {
    fullscreen: true,
  };
  return <Spin {...inputProps} />;
};

export default SpinAntd;
