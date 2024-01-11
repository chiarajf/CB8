import { useState } from "react";
import "./index.scss";

const AddTodoInput = ({ setValueData }) => {
  const [value, setValue] = useState("");

  const onInputChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValueData((prevData) => [
      ...prevData,
      {
        id: prevData.length,
        text: value,
        completed: false,
      },
    ]);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={value}
        onChange={onInputChange}
        placeholder="What is your task today?"
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};

export default AddTodoInput;
