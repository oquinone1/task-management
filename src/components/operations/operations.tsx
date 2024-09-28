import { DeleteOutlined, DiffOutlined, FormOutlined } from "@ant-design/icons";
import { lazy, Suspense } from "react";
import ButtonAntd from "../antd components/buttonAntd";
import { useOperationsHook } from "./operations.hooks";

const Modal = lazy(() => import("../antd components/modalAntd"));
const Input = lazy(() => import("../antd components/inputAntd"));

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
    store,
  } = useOperationsHook();

  return (
    <div className="w-full box-border m-[15px] ml-[5px] py-[15px]">
      <ButtonAntd
        disabled={!store?.projectId}
        onClick={() => {
          openColumnsModal();
        }}
        icon={<DiffOutlined />}
        className="mr-[10px]"
      >
        Add Column
      </ButtonAntd>
      <ButtonAntd
        disabled={
          !store.projectId
            ? !store.projectId
            : store?.selectedProject?.columns !== null
            ? false
            : true
        }
        className="mr-[10px]"
        icon={<FormOutlined />}
        onClick={() => openTasksModal()}
      >
        Add Task
      </ButtonAntd>
      <ButtonAntd
        disabled={!store.projectId}
        className="mr-[10px]"
        onClick={() => setRemoveProject(true)}
        icon={<DeleteOutlined />}
        danger
      >
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
          <Input
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
          <Input
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
