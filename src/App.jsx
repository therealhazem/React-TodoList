import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App" style={{
      backgroundColor: "#191b1f",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <TodoList />
    </div >
  );
}

export default App;
