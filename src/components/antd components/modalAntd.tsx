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
    className = "",
    styles = "",
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
    className,
    styles,
  };

  return <Modal {...inputProps} />;
};

export default ModalAntd;
