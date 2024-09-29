import { Droppable } from "react-beautiful-dnd";
import TaskComponent from "../task/task";

const ColumnComponent = (props: any) => {
  const { column, tasks } = props || null;
  return (
    <section
      // className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-gray-100 border-2 m-[10px] border-2 border-"
      className="flex flex-col bg-gray-100 px-[10px] pt-[10px] pb-[5px] mr-[30px] rounded-md"
    >
      <h2 className="">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="flex-grow w-[200px] rounded-lg"
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
