import { Button } from "antd";

const ButtonAntd = (props: any) => {
  const {
    icon = null,
    onClick = null,
    children = null,
    type = "primary",
    className = "",
    testId = "",
  } = props || {};

  const inputProps: any = {
    icon,
    onClick,
    children,
    type,
    className,
  };
  if (testId) inputProps["data-testid"] = testId;

  return <Button {...inputProps} />;
};

export default ButtonAntd;
