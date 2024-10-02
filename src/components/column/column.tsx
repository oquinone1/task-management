import { Droppable } from "react-beautiful-dnd";
import TaskComponent from "../task/task";
import "./column.css";

const ColumnComponent = (props: any) => {
  const { column, tasks } = props || null;
  return (
    <section className="flex flex-col bg-gray-100 px-[10px] pt-[10px] pb-[5px] mr-[30px] min-h-[200px] max-h-full rounded-md">
      <h2 className="">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="flex-grow w-[200px] rounded-lg min-h-[20px] overflow-y-auto hidescrollbar"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task: any, index: number) => (
              <TaskComponent
                key={task.id}
                task={task}
                index={index}
                columnId={column.id}
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
