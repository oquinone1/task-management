import { useState } from "react";
import { initialData } from "../mock/tasks.mock";
import { DragDropContext } from "react-beautiful-dnd";
import ColumnComponent from "./column";

const DragAndDropComponent = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result: any) => {
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

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
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

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section className="flex flex-row bg-grey-100 m-[10px] overflow-hidden">
        {data.columnOrder?.map((columnId: string) => {
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
  );
};

export default DragAndDropComponent;
