import { Menu } from "antd";

const MenuAntd = (props: any) => {
  const { items = [], onClick = null, className = "" } = props || {};

  const inputProps = {
    items,
    onClick,
    className,
  };
  return <Menu {...inputProps} />;
};

export default MenuAntd;
