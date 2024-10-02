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
    okButtonProps,
    cancelButtonProps,
    footer,
    closable = true,
    maskClosable = true,
  } = props || {};

  const inputProps = {
    open,
    children,
    title,
    okText,
    cancelText,
    onCancel,
    onOk,
    okButtonProps,
    cancelButtonProps,
    footer,
    closable,
    maskClosable,
  };

  return <Modal {...inputProps} />;
};

export default ModalAntd;
