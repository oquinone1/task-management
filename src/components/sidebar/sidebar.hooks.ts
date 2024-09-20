import { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { items } from "../../mock/menu.mock";
// import { taskData } from "../../mock/tasks.mock";

export const useSidebarHooks = () => {
  const [modal, setModal] = useState(false);
  const store: any = useStore();

  useEffect(() => {
    store.setMenuItems(items);
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

  return { modal, setModal, addNewTaskManager };
};
