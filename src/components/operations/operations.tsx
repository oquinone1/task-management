import ButtonAntd from "../antd components/buttonAntd";
import ModalAntd from "../antd components/modalAntd";
import InputAntd from "../antd components/inputAntd";
import { useOperationsHook } from "./operations.hooks";

const OperationsComponent = () => {
  const { modal, setModal, task, setTask, submitTask } = useOperationsHook();

  return (
    <div className="flex flex-row justify-between w-[98%] p-[1em] m-[10px] bg-white rounded-md">
      <p>OperationsComponent</p>
      <ButtonAntd onClick={() => setModal(true)}>Add new task</ButtonAntd>
      <ModalAntd
        open={modal}
        title="Add new task"
        onOk={() => submitTask()}
        onCancel={() => setModal(false)}
      >
        <p>Task</p>
        <InputAntd
          placeholder="Ex. Add new styling"
          value={task}
          onChange={(e: any) => setTask(e.target.value)}
        />
      </ModalAntd>
    </div>
  );
};

export default OperationsComponent;
