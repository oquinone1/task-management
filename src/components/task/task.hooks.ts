import { useState } from "react";
import { GetAPICall, PutAPICall, DeleteAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";
import { useStore } from "../../store/store";

interface TaskData {
  summary: string;
  description: string;
  priority: string;
  date: string;
}

export const useTaskHooks = () => {
  const store: any = useStore();
  const [taskModal, setTaskModal] = useState(false);
  const [taskData, setTaskData] = useState<TaskData | any>({});

  const openTaskModal = (task: any) => {
    setTaskModal(true);
    setTaskData({
      summary: task.content,
      description: task.description,
      priority: task.priority,
      date: task.date,
    });
  };

  const updateTask = async (id: string) => {
    const data = {
      id: store.projectId,
      task: {
        content: taskData.summary,
        description: taskData.description,
        date: taskData.date,
        priority: taskData.priority,
        id,
      },
    };

    await PutAPICall({ url: urls.updateTask, data });
    const url: string = `${urls.getProjectData}?id=${store.projectId}`;
    const res: any = await GetAPICall({ url });
    const structredData = {
      id: res.id,
      columns: res.columns.columns,
      columnOrder: res.columns.columnOrder,
      tasks: res.tasks.tasks,
    };
    store.setSelectedProject(structredData);
    setTaskModal(false);
  };

  const removeTask = async (props: any) => {
    const { taskId, columnId } = props || {};
    const taskData = {
      id: store.projectId,
      taskId,
    };

    const columnData = {
      ...taskData,
      columnName: columnId,
    };

    await DeleteAPICall({ url: urls.removeTask, data: taskData });
    await DeleteAPICall({ url: urls.removeTaskFromTaskIds, data: columnData });
    const url: string = `${urls.getProjectData}?id=${store.projectId}`;
    const res: any = await GetAPICall({ url });
    const structredData = {
      id: res.id,
      columns: res.columns.columns,
      columnOrder: res.columns.columnOrder,
      tasks: res.tasks.tasks,
    };
    store.setSelectedProject(structredData);
    setTaskModal(false);
  };

  return {
    taskModal,
    setTaskModal,
    openTaskModal,
    taskData,
    setTaskData,
    updateTask,
    removeTask,
  };
};
