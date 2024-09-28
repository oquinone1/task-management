import { Draggable } from "react-beautiful-dnd";

const TaskComponent = (props: any) => {
  const { task, index } = props || null;
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="bg-white rounded h-[50px] mb-[5px]"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default TaskComponent;
