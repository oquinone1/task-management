import SkeletonAntd from "../antd components/skeletonAntd";

const DragAndDropSkeletonComponent = () => {
  const columns = [...Array(4)].map((_: any, index: number) => {
    return (
      <SkeletonAntd
        key={`skeleton_${index}`}
        style={{ minWidth: "250px" }}
        paragraph={{ rows: 22 }}
        active
      />
    );
  });
  return (
    <section className="flex flex-row justify-between h-full mr-[20px] pt-[20px]">
      {columns}
    </section>
  );
};

export default DragAndDropSkeletonComponent;
