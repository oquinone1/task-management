import SkeletonAntd from "../antd components/skeletonAntd";
import { useStore } from "../../store/store";
import { colorThemes } from "../../config/types";

const DragAndDropSkeletonComponent = () => {
  const store: any = useStore();

  return (
    <section
      className={` h-full p-[15px] rounded`}
      style={{
        backgroundColor: `${
          store.theme === colorThemes.lightTheme ? "#FFF" : "#001529"
        }`,
      }}
    >
      <SkeletonAntd paragraph={{ rows: 3 }} />
      <br />
      <br />
      <br />
      <br />
      <SkeletonAntd paragraph={{ rows: 3 }} />
      <br />
      <br />
      <br />
      <br />
      <SkeletonAntd paragraph={{ rows: 3 }} />
    </section>
  );
};

export default DragAndDropSkeletonComponent;
