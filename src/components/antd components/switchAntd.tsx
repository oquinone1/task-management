import { Switch } from "antd";

const SwitchAntd = (props: any) => {
  const { onChange, checkedChildren, unCheckedChildren } = props || {};

  const inputProps = {
    onChange,
    checkedChildren,
    unCheckedChildren,
  };
  return <Switch {...inputProps} />;
};

export default SwitchAntd;
