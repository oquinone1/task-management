import { Select } from "antd";

const SelectAntd = (props: any) => {
  const {
    value = "",
    onChange = null,
    allowClear = false,
    className = "",
    options = [],
    optionRender = null,
    style,
  } = props || {};

  const inputProps = {
    value,
    onChange,
    allowClear,
    className,
    options,
    optionRender,
    style,
  };

  return <Select {...inputProps} />;
};

export default SelectAntd;
