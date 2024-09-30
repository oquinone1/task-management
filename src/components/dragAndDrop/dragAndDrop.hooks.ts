import { useState, useEffect } from "react";
import { useStore } from "../../store/store";
import { GetAPICall, PutAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";

interface DragAndDrop {
  columns: any;
  tasks: any;
  columnOrder: any;
}

export const useDragAndDropHooks = () => {
  const store: any = useStore();
  const [data, setData] = useState<DragAndDrop>();

  useEffect(() => {
    setData(store.selectedProject);
  }, [store.selectedProject]);

  const onDragEnd = async (result: any) => {
    // TODO: reorder our column
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data?.columns[source.droppableId];
    const finish = data?.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState: any = {
        ...data,
        columns: {
          ...data?.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newState);
      return;
    }

    // Moving from one list to another list
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState: any = {
      ...data,
      columns: {
        ...data?.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newState);
    let col = {
      columns: newState.columns,
      columnOrder: newState.columnOrder,
      id: newState.id,
    };
    await PutAPICall({ url: urls.replaceColumns, data: { ...col } });
    const url: string = `${urls.getProjectData}?id=${store.projectId}`;
    const res: any = await GetAPICall({ url });
    const structredData = {
      id: res.id,
      columns: res.columns.columns,
      columnOrder: res.columns.columnOrder,
      tasks: res.tasks.tasks,
    };
    store.setSelectedProject(structredData);
  };

  return { data, setData, onDragEnd, store };
};
