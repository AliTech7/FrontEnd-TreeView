import "./App.css";
import TreeView from "./TreeView";
import menus from "./data";

function App() {
  return (
    <div className="App">
      
        <TreeView menus={menus}/>

    </div>
  );
}

export default App;
