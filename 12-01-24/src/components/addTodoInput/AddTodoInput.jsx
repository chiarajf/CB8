import { useState } from "react";
import styles from "./index.module.scss";

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={value}
        onChange={onInputChange}
        placeholder="What is your task today?"
      />
      <button type="submit" className={styles.btn}>
        Add
      </button>
    </form>
  );
};

export default AddTodoInput;
