import { Card } from "antd";
const { Meta } = Card;

const CardAntd = (props: any) => {
  const {
    bordered = true,
    title = "",
    meta = null,
    style = "",
    children,
    className = "",
    onClick,
    onDoubleClick,
  } = props || {};

  const inputProps = {
    bordered,
    title,
    style,
    children,
    className,
    onClick,
    onDoubleClick,
  };
  if (meta) inputProps.children = <Meta {...meta} />;

  return <Card {...inputProps} />;
};

export default CardAntd;
