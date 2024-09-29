import { DeleteOutlined, DiffOutlined, FormOutlined } from "@ant-design/icons";
import { lazy, Suspense } from "react";
import ButtonAntd from "../antd components/buttonAntd";
import { useOperationsHook } from "./operations.hooks";
import { priorityList } from "../../config/types";

const Modal = lazy(() => import("../antd components/modalAntd"));
const Input = lazy(() => import("../antd components/inputAntd"));
const Textarea = lazy(() => import("../antd components/textareaAntd"));
const Select = lazy(() => import("../antd components/selectAntd"));
const DatePicker = lazy(() => import("../antd components/datePickerAntd"));
const Space = lazy(() => import("../antd components/spaceAntd"));

const OperationsComponent: React.FC = () => {
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
    description,
    setDescription,
    setPriority,
    priority,
    date,
    setDate,
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
      <Suspense>
        <Modal
          open={newTaskModal}
          title="Add Task"
          onOk={() => submitTask()}
          onCancel={() => setNewTaskModal(false)}
        >
          <label>Summary</label>
          <Input
            className="mb-[10px]"
            placeholder="Ex. Add APIs"
            value={task}
            onChange={(e: any) => setTask(e.target.value)}
          />

          <label>Description</label>
          <Textarea
            className="mb-[10px]"
            placeholder="Ex. Connect backend API to display user list"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            autoSize={{ minRows: 6, maxRows: 6 }}
          />

          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[48%]">
              <label>Priority</label>
              <Select
                className="mb-[10px]"
                placeholder="Ex. Add new styling"
                value={priority}
                onChange={(e: any) => setPriority(e)}
                options={priorityList}
                style={{ width: "200px" }}
                optionRender={(option: any) => (
                  <Space>
                    <span role="img" aria-label={option.data.label}>
                      <option.data.icon color={option.data.color} />
                    </span>
                    {option.data.label}
                  </Space>
                )}
                allowClear
              />
            </div>

            <div className="flex flex-col w-[48%]">
              <label>Due Date</label>
              <DatePicker
                placeholder="Select Date"
                value={date}
                onChange={(e: any) => setDate(e)}
                allowClear
              />
            </div>
          </div>
        </Modal>
        <Modal
          open={columnsModal}
          title="Add Column"
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
          okButtonProps={{ style: { backgroundColor: "red" } }}
          okText="Delete"
          title="Would you like to delete this project?"
        />
      </Suspense>
    </div>
  );
};

export default OperationsComponent;
