import { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { GetAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";
// import { items } from "../../mock/menu.mock";
// import { taskData } from "../../mock/tasks.mock";

export const useSidebarHooks = () => {
  const [modal, setModal] = useState(false);
  const store: any = useStore();

  useEffect(() => {
    const getAllData = async () => {
      const data: any = await GetAPICall({ url: urls.getProjectTitles });
      store.setMenuItems(data);
    };

    getAllData();
  }, []);

  const addNewTaskManager = () => {
    let currentItems = store.menuItems;
    let label = store.projectTitle;
    let key = `${label}-${currentItems.length + 1}`;
    let newItem = { key, label, id: "" };
    let newMenu = [...currentItems, { ...newItem }];
    console.log(newMenu);
    store.setMenuItems(newMenu);
    store.setProjectTitle("");
    // store.setSelectedProject({});
    // store.setProjectId("");
    setModal(false);
  };

  const getProjectData = async (key: string) => {
    const menuItems = store.menuItems;

    const currentObject: any = menuItems.find((item: any) => {
      return item.key === key;
    });
    if (!currentObject.id) {
      store.setProjectId("");
      store.setSelectedProject({});
      return;
    }

    store.setProjectId(currentObject.id);
    const url: string = `${urls.getProjectData}?id=${currentObject.id}`;
    const data: any = await GetAPICall({ url });
    const structredData = {
      id: data.id,
      columns: data.columns.columns,
      columnOrder: data.columns.columnOrder,
      tasks: data.tasks.tasks,
    };
    store.setSelectedProject(structredData);
  };

  return { modal, setModal, addNewTaskManager, getProjectData };
};
