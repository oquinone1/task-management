import { Menu } from "antd";

const MenuAntd = (props: any) => {
  const {
    items = [],
    onClick = null,
    className = "",
    inlineCollapsed = false,
    mode,
  } = props || {};

  const inputProps = {
    items,
    onClick,
    className,
    inlineCollapsed,
    mode,
  };
  return <Menu {...inputProps} />;
};

export default MenuAntd;
