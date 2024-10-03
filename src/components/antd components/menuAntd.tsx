import { Menu } from "antd";

const MenuAntd = (props: any) => {
  const {
    items = [],
    onClick = null,
    className = "",
    inlineCollapsed = false,
    mode,
    theme,
  } = props || {};

  const inputProps = {
    items,
    onClick,
    className,
    inlineCollapsed,
    mode,
    theme,
  };
  return <Menu {...inputProps} />;
};

export default MenuAntd;
