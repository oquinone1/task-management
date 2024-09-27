import { Droppable } from "react-beautiful-dnd";
import TaskComponent from "./task";

const ColumnComponent = (props: any) => {
  const { column, tasks } = props || null;
  return (
    <section
      // className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-gray-100 border-2 m-[10px] border-2 border-"
      className=" px-[10px] pt-[10px] pb-[5px] rounded-sm bg-gray-100 flex flex-col mr-[15px] border-2"
    >
      <h2 className="">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="flex-grow min-w-[300px]"
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
