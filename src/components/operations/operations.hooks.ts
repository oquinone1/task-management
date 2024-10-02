import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { PostAPICall, GetAPICall, DeleteAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";
import { useStore } from "../../store/store";

interface TaskContent {
  summary: string;
  description: string;
  priority: string;
  date: any;
}

export const useOperationsHook = () => {
  const store: any = useStore();
  const [newTaskModal, setNewTaskModal] = useState(false);
  const [columnsModal, setColumnsModal] = useState(false);
  const [column, setColum] = useState("");
  const [removeProject, setRemoveProject] = useState(false);
  const [taskContent, setTaskContent] = useState<TaskContent | any>({});
  const [modalAddProject, setModalAddProject] = useState(false);

  useEffect(() => {
    if (!modalAddProject) {
      const getProjects = async () => {
        const data: any = await GetAPICall({ url: urls.getProjectTitles });
        store.setMenuItems(data);
      };

      getProjects();
    }
  }, [modalAddProject]);

  const submitTask = async () => {
    const selectedProject = store.selectedProject;
    const id = store.projectId;
    const allTasks = selectedProject.tasks;
    const taskCount = allTasks !== null ? Object.keys(allTasks).length : 0;
    let taskName = `${taskContent.summary}-${taskCount + 1}`;
    let newTask: any = {
      id,
      tasks: {
        [taskName]: {
          id: taskName,
          content: taskContent.summary,
          description: taskContent.description,
          priority: taskContent.priority,
          date: taskContent.date,
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
    store.setSelectedProject(structredData);
    setNewTaskModal(false);
  };

  const submitColumn = async () => {
    const selectedProject = store.selectedProject;
    const id = store.projectId;
    const columnLen =
      selectedProject?.columns === null
        ? 0
        : Object.keys(selectedProject.columns).length;
    const columnName = `${column}-${columnLen + 1}`;

    const columns = {
      [columnName]: {
        id: columnName,
        title: column,
        taskIds: [],
      },
    };

    const columnOrder =
      selectedProject.columnOrder !== null
        ? [...selectedProject.columnOrder, columnName]
        : [columnName];

    const columnData = {
      id,
      columns,
      columnOrder,
    };

    await PostAPICall({ url: urls.addColumn, data: columnData });
    const url: string = `${urls.getProjectData}?id=${id}`;
    const projectData: any = await GetAPICall({ url });
    const structredData = {
      id: projectData.id,
      columns: projectData.columns.columns,
      columnOrder: projectData.columns.columnOrder,
      tasks: projectData.tasks.tasks,
    };
    store.setSelectedProject(structredData);
    setColumnsModal(false);
  };

  const openColumnsModal = () => {
    setColum("");
    setColumnsModal(true);
  };

  const openTasksModal = () => {
    setTaskContent({
      summary: "",
      description: "",
      priority: "",
      date: dayjs(new Date()),
    });
    setNewTaskModal(true);
  };

  const deleteProject = async () => {
    const currentId = store.projectId;
    store.resetStore();
    const url: string = `${urls.removeProject}?id=${currentId}`;
    await DeleteAPICall({ url });

    const data: any = await GetAPICall({ url: urls.getProjectTitles });
    store.setMenuItems(data);
    setRemoveProject(false);
  };

  const addProject = async () => {
    let currentItems = store.menuItems || 0;
    let label = store.projectTitle;
    let key = `${label}-${currentItems.length + 1}`;
    let data = { key, label };
    store.setProjectTitle("");
    await PostAPICall({ url: urls.addProject, data });
    setModalAddProject(false);
  };

  return {
    newTaskModal,
    setNewTaskModal,
    columnsModal,
    setColumnsModal,
    openTasksModal,
    submitTask,
    column,
    setColum,
    submitColumn,
    openColumnsModal,
    removeProject,
    setRemoveProject,
    deleteProject,
    store,
    taskContent,
    setTaskContent,
    modalAddProject,
    setModalAddProject,
    addProject,
  };
};
