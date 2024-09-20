import { Modal } from "antd";

const ModalAntd = (props: any) => {
  const {
    open = false,
    children = null,
    title = "",
    okText = "",
    cancelText = "",
    onCancel = null,
    onOk = null,
  } = props || {};

  const inputProps = {
    open: open,
    children: children,
    title: title,
    okText: okText,
    cancelText: cancelText,
    onCancel: onCancel,
    onOk: onOk,
  };

  return <Modal {...inputProps} />;
};

export default ModalAntd;
