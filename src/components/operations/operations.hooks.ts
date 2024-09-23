import { useState, useEffect } from "react";
import { PostAPICall, GetAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";
import { useStore } from "../../store/store";

export const useOperationsHook = () => {
  const store: any = useStore();
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState("");

  const submitTask = async () => {
    const selectedProject = store.selectedProject;
    const id = store.projectId;
    const allTasks = selectedProject.tasks;
    const taskCount = Object.keys(allTasks).length;
    let taskName = `${task}-${taskCount + 1}`;
    let newTask: any = {
      id,
      tasks: {
        [taskName]: {
          id: taskName,
          content: task,
        },
      },
    };

    await PostAPICall({ url: urls.addTask, data: newTask });

    // update column tasksId
    const columnName = selectedProject.columnOrder[0];
    let columns = JSON.parse(JSON.stringify(selectedProject.columns));
    columns[columnName].taskIds.push(taskName);

    let updateColumn: any = {
      id,
      columns: {
        ...columns,
      },
      columnOrder: selectedProject.columnOrder,
    };
    await PostAPICall({ url: urls.addColumn, data: updateColumn });
    const url: string = `${urls.getProjectData}?id=${id}`;
    const data: any = await GetAPICall({ url });
    const structredData = {
      id: data.id,
      columns: data.columns.columns,
      columnOrder: data.columns.columnOrder,
      tasks: data.tasks.tasks,
    };
    console.log(structredData);
    store.setSelectedProject(structredData);
    setModal(false);
  };

  return { modal, setModal, task, setTask, submitTask };
};
