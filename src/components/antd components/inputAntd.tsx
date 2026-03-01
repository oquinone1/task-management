import { Input } from "antd";

const InputAntd = (props: any) => {
  const {
    placeholder = "",
    value = "",
    onChange = null,
    allowClear = false,
    className = "",
    style = "",
  } = props || {};

  const inputProps = {
    placeholder,
    value,
    onChange,
    allowClear,
    className,
    style,
  };

  return <Input {...inputProps} />;
};

export default InputAntd;
