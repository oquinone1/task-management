import { urls } from "../config/urls";

export const getProjects = async () => {
  const response = await fetch(urls.getAllProjects);
  const res = await response.json();
  return res;
};

export const GetAPICall = async () => {};
