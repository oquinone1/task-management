import MenuAntd from "../antd components/menuAntd";
import { useStore } from "../../store/store";
import { useSidebarHooks } from "./sidebar.hooks";

const SidebarComponent: React.FC = () => {
  const store: any = useStore();
  const { getProjectData } = useSidebarHooks();

  return (
    <>
      {store.menuItems && store.menuItems.length > 0 ? (
        <MenuAntd
          items={store.menuItems}
          className={`bg-gray-200 h-full py-[20px]`}
          onClick={(e: any) => {
            getProjectData(e.key);
          }}
          mode="inline"
        />
      ) : (
        <div className="h-[45%] text-center place-content-end">
          Please add a project
        </div>
      )}
    </>
  );
};

export default SidebarComponent;
