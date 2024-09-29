import { DatePicker } from "antd";

const DatePickerAntd = (props: any) => {
  const {
    picker,
    value = "",
    onChange = null,
    allowClear = false,
    className = "",
    style = "",
    placeholder = "",
  } = props || {};

  const inputProps = {
    picker,
    value,
    onChange,
    allowClear,
    className,
    style,
    placeholder,
  };

  return <DatePicker {...inputProps} />;
};

export default DatePickerAntd;
