import DragAndDropComponent from "./components/dragAndDrop/dragAndDrop";
import SidebarComponent from "./components/sidebar/sidebar";
import OperationsComponent from "./components/operations/operations";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;
import { useStore } from "./store/store";
import { getTheme } from "./utility/utility";

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
          <div
            style={{
              padding: "0 10px",
              backgroundColor: getTheme(store.theme),
              height: "100%",
              borderRadius: "7px",
            }}
          >
            <div
              style={{
                overflowX: "scroll",
                height: "100%",
                backgroundColor: getTheme(store.theme),
                borderRadius: "7px",
              }}
            >
              <DragAndDropComponent />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
