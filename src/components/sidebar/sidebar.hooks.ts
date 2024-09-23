import { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { GetAPICall, PostAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";
// import { items } from "../../mock/menu.mock";
// import { taskData } from "../../mock/tasks.mock";

export const useSidebarHooks = () => {
  const [modal, setModal] = useState(false);
  const store: any = useStore();

  useEffect(() => {
    const getProjects = async () => {
      const data: any = await GetAPICall({ url: urls.getProjectTitles });
      store.setMenuItems(data);
    };

    getProjects();
  }, []);

  useEffect(() => {
    if (!modal) {
      const getProjects = async () => {
        const data: any = await GetAPICall({ url: urls.getProjectTitles });
        store.setMenuItems(data);
      };

      getProjects();
    }
  }, [modal]);

  const addProject = async () => {
    let currentItems = store.menuItems || 0;
    let label = store.projectTitle;
    let key = `${label}-${currentItems.length + 1}`;
    let data = { key, label };
    // let newMenu = [...currentItems, { ...newItem }];
    // store.setMenuItems(newMenu);
    store.setProjectTitle("");
    await PostAPICall({ url: urls.addProject, data });
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

  return { modal, setModal, addProject, getProjectData };
};
