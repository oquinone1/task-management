import { urls } from "../config/urls";

export const getProjects = async () => {
  const response = await fetch(urls.getProjectTitles);
  const res = await response.json();
  return res;
};

export const GetAPICall = async (props: any) => {
  const { url, options } = props || {};

  let moreOptions = {
    method: "GET",
    ...options,
  };

  const response = await fetch(url, { ...moreOptions });
  const res = await response.json();
  return res;
};

export const PostAPICall = async (props: any) => {
  const { url, options } = props || {};

  let moreOptions = {
    method: "POST",
    ...options,
  };

  const response = await fetch(url, { ...moreOptions });
  const res = await response.json();
  return res;
};
