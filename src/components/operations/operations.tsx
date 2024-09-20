import ButtonAntd from "../antd components/buttonAntd";
import ModalAntd from "../antd components/modalAntd";
import { useOperationsHook } from "./operations.hooks";

const OperationsComponent = () => {
  const { modal, setModal } = useOperationsHook();

  return (
    <div className="flex flex-row justify-between w-[98%] p-[1em] m-[10px] bg-white rounded-md">
      <p>OperationsComponent</p>
      <ButtonAntd onClick={() => setModal(true)}>Add new task</ButtonAntd>
      <ModalAntd open={modal} onCancel={() => setModal(false)}>
        <p>blah</p>
      </ModalAntd>
    </div>
  );
};

export default OperationsComponent;
