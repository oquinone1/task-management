import { Suspense } from "react";
// import { initialData } from "../../mock/tasks.mock";
import { DragDropContext } from "react-beautiful-dnd";
import ColumnComponent from "../column";
import { useStore } from "../../store/store";
import DragAndDropSkeletonComponent from "./dragAndDropSkeleton";
import { useDragAndDropHooks } from "./dragAndDrop.hooks";
import { PutAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";

const DragAndDropComponent = () => {
  const store: any = useStore();
  const { data, setData } = useDragAndDropHooks();

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
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Object.keys(store.selectedProject).length > 0 ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <section className="flex flex-row w-[92%] h-[87%] bg-white overflow-x-auto">
            {data?.columnOrder?.map((columnId: string) => {
              const column: any = data.columns[columnId];
              const tasks: any = column.taskIds.map(
                (taskId: string) => data.tasks[taskId]
              );
              return (
                <ColumnComponent key={columnId} column={column} tasks={tasks} />
              );
            })}
          </section>
        </DragDropContext>
      ) : (
        <DragAndDropSkeletonComponent />
      )}
    </Suspense>
  );
};

export default DragAndDropComponent;
