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
    header,
    body,
  } = props || {};

  const inputProps = {
    bordered,
    title,
    style,
    children,
    className,
    header,
    body,
  };
  if (meta) inputProps.children = <Meta {...meta} />;

  return <Card {...inputProps} />;
};

export default CardAntd;
