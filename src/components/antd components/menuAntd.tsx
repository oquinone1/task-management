import { Menu } from "antd";

const MenuAntd = (props: any) => {
  const { items = [] } = props || {};

  const inputProps = {
    items,
  };
  return <Menu {...inputProps} />;
};

export default MenuAntd;
