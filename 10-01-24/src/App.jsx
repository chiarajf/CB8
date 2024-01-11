import { useState } from "react";
import "./App.scss";
import AddTodoInput from "./components/addTodoInput";
import TodoList from "./components/todoList";

function App() {
  const [valueData, setValueData] = useState([]);
  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTodoInput setValueData={setValueData} />
      <TodoList list={valueData} setValueData={setValueData} />
    </div>
  );
}

export default App;
