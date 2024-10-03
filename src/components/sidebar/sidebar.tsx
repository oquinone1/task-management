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
          theme={store.theme}
          items={store.menuItems}
          className={`h-full py-[20px]`}
          onClick={(e: any) => {
            getProjectData(e.key);
          }}
          mode="inline"
        />
      ) : (
        <div className="text-black h-full text-center place-content-center">
          Please add a project
        </div>
      )}
    </>
  );
};

export default SidebarComponent;
