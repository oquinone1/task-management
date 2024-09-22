import { useState, useEffect } from "react";
import { useStore } from "../../store/store";

interface DragAndDrop {
  columns: any;
  tasks: any;
  columnOrder: any;
}

export const useDragAndDropHooks = () => {
  const store: any = useStore();
  const [data, setData] = useState<DragAndDrop>();

  useEffect(() => {
    setData(store.selectedProjectItems);
  }, [store.selectedProjectItems]);

  return { data, setData };
};
