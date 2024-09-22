import { Draggable } from "react-beautiful-dnd";

const TaskComponent = (props: any) => {
  const { task, className, index } = props || null;
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className={`${className} m-height-[200px]`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.taskContent}
        </div>
      )}
    </Draggable>
  );
};

export default TaskComponent;
