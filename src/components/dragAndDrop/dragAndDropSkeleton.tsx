import SkeletonAntd from "../antd components/skeletonAntd";
import { useStore } from "../../store/store";
import { colorThemes } from "../../config/types";
import "./dragAndDrop.css";

const DragAndDropSkeletonComponent = () => {
  const store: any = useStore();

  return (
    <section className={`h-full p-[15px] rounded `}>
      <SkeletonAntd
        paragraph={{ rows: 3 }}
        className={`${
          store.theme == colorThemes.lightTheme ? "" : "dark-mode"
        }`}
      />
      <br />
      <br />
      <br />
      <br />
      <SkeletonAntd
        paragraph={{ rows: 3 }}
        className={`${
          store.theme == colorThemes.lightTheme ? "" : "dark-mode"
        }`}
      />
      <br />
      <br />
      <br />
      <br />
      <SkeletonAntd
        paragraph={{ rows: 3 }}
        className={`${
          store.theme == colorThemes.lightTheme ? "" : "dark-mode"
        }`}
      />
    </section>
  );
};

export default DragAndDropSkeletonComponent;
