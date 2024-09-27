import { Button } from "antd";

const ButtonAntd = (props: any) => {
  const {
    icon = null,
    onClick = null,
    children = null,
    type = "primary",
    testId = "",
  } = props || {};

  const inputProps: any = {
    icon: icon,
    onClick: onClick,
    children: children,
    type: type,
  };
  if (testId) inputProps["data-testid"] = testId;

  return <Button {...inputProps} />;
};

export default ButtonAntd;
