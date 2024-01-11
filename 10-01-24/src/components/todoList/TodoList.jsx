import "./index.scss";
import Todo from "../todo";

const TodoList = ({ list, setValueData }) => {
  return (
    <div className="todo-list">
      <h3>Todo list of the day:</h3>
      {list.map((item) => (
        <Todo key={item.id} setValueData={setValueData} todoItem={item} />
      ))}
    </div>
  );
};

export default TodoList;
