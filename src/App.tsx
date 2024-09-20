import DragAndDropComponent from "./components/dragAndDrop";
import SidebarComponent from "./components/sidebar/sidebar";
import OperationsComponent from "./components/operations/operations";
// import "./App.css";

function App() {
  return (
    <div className="flex flex-row h-screen overflow-hidden bg-gray-100">
      <SidebarComponent />
      <div className="w-full">
        <OperationsComponent />
        <DragAndDropComponent />
      </div>
    </div>
  );
}

export default App;
