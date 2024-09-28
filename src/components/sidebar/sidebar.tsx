import { Suspense, lazy } from "react";
import MenuAntd from "../antd components/menuAntd";
import { PlusOutlined } from "@ant-design/icons";
import { useStore } from "../../store/store";
import { useSidebarHooks } from "./sidebar.hooks";
import ButtonAntd from "../antd components/buttonAntd";

const Modal = lazy(() => import("../antd components/modalAntd"));
const Input = lazy(() => import("../antd components/inputAntd"));

const SidebarComponent: React.FC = () => {
  const store: any = useStore();
  const { modal, setModal, addProject, getProjectData } = useSidebarHooks();

  return (
    <section className="border-rounded min-w-[250px] m-[15px] h-[96%] bg-gray-200 rounded-md">
      <div className="flex justify-end p-[15px]">
        <ButtonAntd icon={<PlusOutlined />} onClick={() => setModal(true)}>
          Add Project
        </ButtonAntd>
      </div>
      {store.menuItems && store.menuItems.length > 0 ? (
        <MenuAntd
          items={store.menuItems}
          className="bg-gray-200"
          onClick={(e: any) => {
            getProjectData(e.key);
          }}
        />
      ) : (
        <div className="h-[45%] text-center place-content-end">
          Please add a project
        </div>
      )}
      <Suspense>
        <Modal
          open={modal}
          title="Add new task manager"
          okText="Add"
          onCancel={() => setModal(false)}
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
    </section>
  );
};

export default SidebarComponent;
