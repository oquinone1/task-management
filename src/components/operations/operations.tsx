import ButtonAntd from "../antd components/buttonAntd";
import ModalAntd from "../antd components/modalAntd";
import InputAntd from "../antd components/inputAntd";
import { useOperationsHook } from "./operations.hooks";

const OperationsComponent = () => {
  const {
    newTaskModal,
    setNewTaskModal,
    columnsModal,
    setColumnsModal,
    task,
    setTask,
    submitTask,
    column,
    setColum,
    submitColumn,
    openColumnsModal,
    openTasksModal,
  } = useOperationsHook();

  return (
    <div className="flex flex-row justify-between w-[98%] p-[1em] m-[10px] bg-white rounded-md">
      <p>OperationsComponent</p>
      <ButtonAntd
        onClick={() => {
          openColumnsModal();
        }}
      >
        Add new column
      </ButtonAntd>
      <ButtonAntd onClick={() => openTasksModal()}>Add new task</ButtonAntd>
      <ModalAntd
        open={newTaskModal}
        title="Add new task"
        onOk={() => submitTask()}
        onCancel={() => setNewTaskModal(false)}
      >
        <p>Task</p>
        <InputAntd
          placeholder="Ex. Add new styling"
          value={task}
          onChange={(e: any) => setTask(e.target.value)}
        />
      </ModalAntd>
      <ModalAntd
        open={columnsModal}
        title="Add column"
        onOk={() => submitColumn()}
        onCancel={() => setColumnsModal(false)}
      >
        <p>Column name</p>
        <InputAntd
          placeholder="Ex. In Progress"
          value={column}
          onChange={(e: any) => setColum(e.target.value)}
        />
      </ModalAntd>
    </div>
  );
};

export default OperationsComponent;
