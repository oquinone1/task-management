import { Input } from "antd";

const { TextArea } = Input;

const TextareaAntd = (props: any) => {
  const {
    placeholder = "",
    value = "",
    onChange = null,
    allowClear = false,
    className = "",
    autoSize = false || {},
    style = {},
  } = props || {};

  const inputProps = {
    placeholder,
    value,
    onChange,
    allowClear,
    className,
    autoSize,
    style,
  };

  return <TextArea {...inputProps} />;
};

export default TextareaAntd;
