import { Suspense } from "react";
// import { initialData } from "../../mock/tasks.mock";
import { DragDropContext } from "react-beautiful-dnd";
import ColumnComponent from "../column/column";
import DragAndDropSkeletonComponent from "./dragAndDropSkeleton";
import { useDragAndDropHooks } from "./dragAndDrop.hooks";
import { colorThemes } from "../../config/types";

const DragAndDropComponent = () => {
  const { data, onDragEnd, store } = useDragAndDropHooks();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Object.keys(store.selectedProject).length > 0 ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <section
            className="flex flex-row w-[100%] h-full p-[20px] rounded"
            style={{
              backgroundColor: `${
                store.theme === colorThemes.lightTheme ? "#DCDCDC" : "#001529"
              }`,
            }}
          >
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
