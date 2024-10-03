import {
  DeleteOutlined,
  DiffOutlined,
  FormOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { lazy, Suspense } from "react";
import ButtonAntd from "../antd components/buttonAntd";
import { useOperationsHook } from "./operations.hooks";
import { priorityList } from "../../config/types";
import DatePickerAntd from "../antd components/datePickerAntd";
import { PlusOutlined } from "@ant-design/icons";
import SwitchAntd from "../antd components/switchAntd";
import { colorThemes } from "../../config/types";

const Modal = lazy(() => import("../antd components/modalAntd"));
const Input = lazy(() => import("../antd components/inputAntd"));
const Textarea = lazy(() => import("../antd components/textareaAntd"));
const Select = lazy(() => import("../antd components/selectAntd"));
const Space = lazy(() => import("../antd components/spaceAntd"));

const OperationsComponent: React.FC = () => {
  const {
    newTaskModal,
    setNewTaskModal,
    columnsModal,
    setColumnsModal,
    taskContent,
    setTaskContent,
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
    modalAddProject,
    setModalAddProject,
    addProject,
  } = useOperationsHook();

  return (
    <div
      className="w-full px-[25px] flex flex-row justify-between rounded"
      style={{
        backgroundColor: `${
          store.theme === colorThemes.lightTheme ? "#DCDCDC" : "#001529"
        }`,
      }}
    >
      <span>
        <ButtonAntd
          onClick={() => store.setSidebarCollapse(!store.sidebarCollapse)}
          className="mr-[10px]"
          ghost={store.theme == colorThemes.lightTheme ? false : true}
        >
          {store.sidebarCollapse ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined />
          )}
        </ButtonAntd>
        <SwitchAntd
          checkedChildren="Light"
          unCheckedChildren="Dark"
          onChange={() =>
            store.setTheme(
              store.theme === colorThemes.lightTheme ? "dark" : "light"
            )
          }
        />
      </span>
      <div>
        <ButtonAntd
          icon={<PlusOutlined />}
          className="mr-[10px]"
          onClick={() => setModalAddProject(true)}
          ghost={store.theme == colorThemes.lightTheme ? false : true}
        >
          Add Project
        </ButtonAntd>
        <ButtonAntd
          disabled={!store?.projectId}
          onClick={() => {
            openColumnsModal();
          }}
          icon={<DiffOutlined />}
          className="mr-[10px]"
          ghost={store.theme == colorThemes.lightTheme ? false : true}
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
          ghost={store.theme == colorThemes.lightTheme ? false : true}
        >
          Add Task
        </ButtonAntd>
        <ButtonAntd
          disabled={!store.projectId}
          className="mr-[10px]"
          onClick={() => setRemoveProject(true)}
          icon={<DeleteOutlined />}
          danger
          ghost={store.theme == colorThemes.lightTheme ? false : true}
        >
          Delete Project
        </ButtonAntd>
      </div>

      <Suspense>
        <Modal
          open={newTaskModal}
          title="Add Task"
          onOk={() => submitTask()}
          onCancel={() => setNewTaskModal(false)}
          okText="Add Task"
        >
          <label>Summary</label>
          <Input
            className="mb-[10px]"
            placeholder="Ex. Add APIs"
            value={taskContent.summary}
            onChange={(e: any) =>
              setTaskContent({
                ...taskContent,
                summary: e.target.value,
              })
            }
          />

          <label>Description</label>
          <Textarea
            className="mb-[10px]"
            placeholder="Ex. Connect backend API to display user list"
            value={taskContent.description}
            onChange={(e: any) =>
              setTaskContent({
                ...taskContent,
                description: e.target.value,
              })
            }
            autoSize={{ minRows: 6, maxRows: 6 }}
          />

          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[48%]">
              <label>Priority</label>
              <Select
                className="mb-[10px]"
                placeholder="Ex. Add new styling"
                value={taskContent.priority}
                onChange={(e: any) =>
                  setTaskContent({
                    ...taskContent,
                    priority: e,
                  })
                }
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
              <DatePickerAntd
                placeholder="Select Date"
                value={taskContent.date}
                onChange={(e: any) =>
                  setTaskContent({
                    ...taskContent,
                    date: e,
                  })
                }
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
          okText="Add Column"
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

        <Modal
          open={modalAddProject}
          title="Add Project"
          okText="Add Project"
          onCancel={() => setModalAddProject(false)}
          onOk={() => addProject()}
        >
          <Input
            value={store.projectTitle}
            onChange={(e: any) => store.setProjectTitle(e.target.value)}
            placeholder="Ex. React Frontend Project"
            allowClear
          />
        </Modal>
      </Suspense>
    </div>
  );
};

export default OperationsComponent;
