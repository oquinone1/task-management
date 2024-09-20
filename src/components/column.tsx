import { Droppable } from "react-beautiful-dnd";
import TaskComponent from "./task";

const ColumnComponent = (props: any) => {
  const { column, tasks } = props || null;
  return (
    <section className="px-[10px] pt-[10px] pb-[5px] rounded-sm bg-white w-[200px] flex flex-col mx-[5px]">
      <h2 className="">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="flex-grow min-h-[400px]"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task: any, index: number) => (
              <TaskComponent
                key={task.id}
                task={task}
                index={index}
                className="bg-white mb-[5px] p-[5px] rounded-sm"
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </section>
  );
};

export default ColumnComponent;
