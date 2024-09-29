import { Draggable } from "react-beautiful-dnd";
import CardAntd from "./antd components/cardAntd";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const TaskComponent = (props: any) => {
  const { task, index } = props || null;
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className=" h-[100px] mb-[5px]"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardAntd style={{ width: 200 }} className="rounded" header="Testing">
            <div>
              <p className="font-bold">{task.content}</p>
            </div>
            <div className="flex flex-row justify-between">
              <span>
                <p>{new Date(task.date).toLocaleDateString()}</p>
              </span>
              <span>
                {task.priority === "Highest" && (
                  <KeyboardDoubleArrowUpOutlinedIcon color="error" />
                )}
                {task.priority === "High" && (
                  <KeyboardArrowUpOutlinedIcon color="error" />
                )}
                {task.priority === "Low" && (
                  <KeyboardArrowDownOutlinedIcon color="primary" />
                )}
                {task.priority === "Lowest" && (
                  <KeyboardDoubleArrowDownOutlinedIcon color="primary" />
                )}
              </span>
            </div>
          </CardAntd>
        </div>
      )}
    </Draggable>
  );
};

export default TaskComponent;
