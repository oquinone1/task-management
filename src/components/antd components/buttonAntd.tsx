import { Button } from "antd";

const ButtonAntd = (props: any) => {
  const {
    icon = null,
    onClick = null,
    children = null,
    type = "primary",
  } = props || {};

  const inputProps: any = {
    icon: icon,
    onClick: onClick,
    children: children,
    type: type,
  };

  return <Button {...inputProps} />;
};

export default ButtonAntd;
