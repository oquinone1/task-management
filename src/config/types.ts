import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const priorityList = [
  {
    value: "Highest",
    label: "Highest",
    icon: KeyboardDoubleArrowUpOutlinedIcon,
    color: "error",
  },
  {
    value: "High",
    label: "High",
    icon: KeyboardArrowUpOutlinedIcon,
    color: "error",
  },
  {
    value: "Low",
    label: "Low",
    icon: KeyboardArrowDownOutlinedIcon,
    color: "primary",
  },
  {
    value: "Lowest",
    label: "Lowest",
    icon: KeyboardDoubleArrowDownOutlinedIcon,
    color: "primary",
  },
];

export enum colorThemes {
  lightTheme = "light",
  darkTheme = "dark",
}
