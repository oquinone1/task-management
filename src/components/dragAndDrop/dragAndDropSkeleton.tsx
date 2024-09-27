import SkeletonAntd from "../antd components/skeletonAntd";

const DragAndDropSkeletonComponent = () => {
  const columns = [...Array(4)].map((_: any) => {
    return (
      <div>
        <SkeletonAntd
          style={{ width: "300px" }}
          paragraph={{ rows: 22 }}
          active
        />
      </div>
    );
  });
  return (
    <section className="flex flex-row justify-between h-full mr-[20px] pt-[20px]">
      {columns}
    </section>
  );
};

export default DragAndDropSkeletonComponent;
