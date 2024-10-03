import DragAndDropComponent from "./components/dragAndDrop/dragAndDrop";
import SidebarComponent from "./components/sidebar/sidebar";
import OperationsComponent from "./components/operations/operations";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;
import { useStore } from "./store/store";
// import "./App.css";

function App() {
  const store: any = useStore();

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={store.sidebarCollapse}>
        <SidebarComponent />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} className="mx-[25px] rounded my-[10px]">
          <OperationsComponent />
        </Header>
        <Content className="m-[25px] my-[10px] h-screen">
          <DragAndDropComponent />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
