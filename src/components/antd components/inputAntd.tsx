import { Input } from "antd";

const InputAntd = (props: any) => {
  const {
    placeholder = "",
    value = "",
    onChange = null,
    allowClear = false,
  } = props || {};

  const inputProps = {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    allowClear: allowClear,
  };

  return <Input {...inputProps} />;
};

export default InputAntd;
