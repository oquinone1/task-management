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
    open,
    children,
    title,
    okText,
    cancelText,
    onCancel,
    onOk,
  };

  return <Modal {...inputProps} />;
};

export default ModalAntd;
