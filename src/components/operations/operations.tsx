import { lazy, Suspense } from "react";
import ButtonAntd from "../antd components/buttonAntd";
import InputAntd from "../antd components/inputAntd";
import { useOperationsHook } from "./operations.hooks";

const Modal = lazy(() => import("../antd components/modalAntd"));

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
    removeProject,
    setRemoveProject,
    deleteProject,
  } = useOperationsHook();

  return (
    <div className="w-full box-border m-[15px] ml-[5px] py-[15px]">
      <ButtonAntd
        onClick={() => {
          openColumnsModal();
        }}
        className="mr-[10px]"
      >
        Add new column
      </ButtonAntd>
      <ButtonAntd className="mr-[10px]" onClick={() => openTasksModal()}>
        Add new task
      </ButtonAntd>
      <ButtonAntd className="mr-[10px]" onClick={() => setRemoveProject(true)}>
        Delete Project
      </ButtonAntd>
      <Suspense fallback={<div>Loading...</div>}>
        <Modal
          open={newTaskModal}
          title="Add task"
          onOk={() => submitTask()}
          onCancel={() => setNewTaskModal(false)}
        >
          <p>Task</p>
          <InputAntd
            placeholder="Ex. Add new styling"
            value={task}
            onChange={(e: any) => setTask(e.target.value)}
          />
        </Modal>
        <Modal
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
        </Modal>
        <Modal
          open={removeProject}
          onOk={() => deleteProject()}
          onCancel={() => setRemoveProject(false)}
          okText="Delete"
        >
          Would you like to delete this project?
        </Modal>
      </Suspense>
    </div>
  );
};

export default OperationsComponent;
