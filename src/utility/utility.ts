import { colorThemes } from "../config/types";

export const getTheme = (theme: any): string => {
  if (theme === colorThemes.lightTheme) return "#DCDCDC";
  return "#001529";
};

// export const getModalTheme = (theme:any): string => {
//     if(theme === colorThemes.lightTheme) return ""
// }
