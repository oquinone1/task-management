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
  } = props || {};

  const inputProps = {
    placeholder,
    value,
    onChange,
    allowClear,
    className,
    autoSize,
  };

  return <TextArea {...inputProps} />;
};

export default TextareaAntd;
