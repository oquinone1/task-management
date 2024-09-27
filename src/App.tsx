import DragAndDropComponent from "./components/dragAndDrop/dragAndDrop";
import SidebarComponent from "./components/sidebar/sidebar";
import OperationsComponent from "./components/operations/operations";
// import "./App.css";

function App() {
  return (
    <div className="flex flex-row h-screen overflow-hidden bg-white">
      <SidebarComponent />
      <div className="w-full h-screen">
        <OperationsComponent />
        <DragAndDropComponent />
      </div>
    </div>
  );
}

export default App;
