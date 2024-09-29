import SkeletonAntd from "../antd components/skeletonAntd";

const DragAndDropSkeletonComponent = () => {
  // const columns = [...Array(4)].map((_: any, index: number) => {
  //   return (
  //     <SkeletonAntd
  //       key={`skeleton_${index}`}
  //       style={{ minWidth: "250px" }}
  //       paragraph={{ rows: 22 }}
  //       active
  //     />
  //   );
  // });
  return (
    <section className="mr-[20px]">
      <SkeletonAntd paragraph={{ rows: 5 }} />
      <br />
      <SkeletonAntd paragraph={{ rows: 5 }} />
    </section>
  );
};

export default DragAndDropSkeletonComponent;
