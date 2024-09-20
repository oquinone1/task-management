import { Menu } from "antd";

const MenuAntd = (props: any) => {
  const { items = [], onClick = null } = props || {};

  const inputProps = {
    items,
    onClick,
  };
  return <Menu {...inputProps} />;
};

export default MenuAntd;
