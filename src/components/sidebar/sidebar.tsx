import { Suspense } from "react";
import MenuAntd from "../antd components/menuAntd";
import { PlusOutlined } from "@ant-design/icons";
import { useStore } from "../../store/store";
import { useSidebarHooks } from "./sidebar.hooks";
import SkeletonAntd from "../antd components/skeletonAntd";
import ButtonAntd from "../antd components/buttonAntd";
import ModalAntd from "../antd components/modalAntd";
import InputAntd from "../antd components/inputAntd";

const SidebarComponent: React.FC = () => {
  const store: any = useStore();
  const { modal, setModal, addNewTaskManager } = useSidebarHooks();

  return (
    <Suspense fallback={<SkeletonAntd />}>
      <section className="border-rounded min-w-[250px] m-[10px] bg-white rounded-md">
        <div className="flex justify-end p-[10px]">
          <ButtonAntd icon={<PlusOutlined />} onClick={() => setModal(true)} />
        </div>
        <MenuAntd items={store.menuItems} />
      </section>
      <ModalAntd
        open={modal}
        title="Add new task manager"
        okText="Add"
        onCancel={() => setModal(false)}
        onOk={() => addNewTaskManager()}
      >
        <InputAntd
          value={store.taskManagerTitle}
          onChange={(e: any) => store.setTaskManagerTitle(e.target.value)}
          placeholder="Ex. React Frontend Project"
          allowClear
        />
      </ModalAntd>
    </Suspense>
  );
};

export default SidebarComponent;
