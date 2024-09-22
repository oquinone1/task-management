import { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { getProjects } from "../../apis/apis";
// import { items } from "../../mock/menu.mock";
// import { taskData } from "../../mock/tasks.mock";

export const useSidebarHooks = () => {
  const [modal, setModal] = useState(false);
  const store: any = useStore();

  useEffect(() => {
    const getAllData = async () => {
      const data: any = await getProjects();

      const menuItems = data.map((items: any) => {
        return { key: items.key, label: items.label };
      });

      store.setMenuItems(menuItems);
      store.setAllProjectData(data);
    };

    getAllData();
  }, []);

  const addNewTaskManager = () => {
    let currentItems = store.menuItems;
    let newItem = {
      key: `${store.taskManagerTitle}_${currentItems.length + 1}`,
      label: store.taskManagerTitle,
    };
    let newMenu = [...currentItems, newItem];
    store.setMenuItems(newMenu);
    store.setTaskManagerTitle("");
    setModal(false);
  };

  const selectedProject = (key: string) => {
    const keySplit = key.split("-");
    const value = Number(keySplit[1]) - 1;

    const data: any = store.allProjectData[value];
    console.log(data);
    store.setSelectedProjectItems(data);
  };

  return { modal, setModal, addNewTaskManager, selectedProject };
};
