import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
  return (
    <div className="App">
      <header>
        TO-DO APP
      </header> <br/><br/>
      <TaskForm /><br/>    
      <TaskList />
    </div>
  );
}

export default App;
