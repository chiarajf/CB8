import React, { useState } from "react";
import "./index.scss";

// Logiche condizionali

const Todo = ({ todoItem, setValueData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todoItem.text);
  const [isMarkButtonVisible, setIsMarkButtonVisible] = useState(true);

  const handleClick = () => {
    setValueData((prev) => prev.filter((item) => item.id !== todoItem.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsMarkButtonVisible(false); // Nascondi il pulsante quando inizia l'editing
  };

  const handleSaveEdit = () => {
    setValueData((prev) =>
      prev.map((item) =>
        item.id === todoItem.id ? { ...item, text: editedText } : item
      )
    );
    setIsEditing(false);
    setIsMarkButtonVisible(true); // Fai riapparire il pulsante quando finisce l'editing
  };

  const handleCancelEdit = () => {
    setEditedText(todoItem.text);
    setIsEditing(false);
    setIsMarkButtonVisible(true); // Fai lo sesso quando si annulla l'editing
  };

  return (
    <li className="todo" id={todoItem.id}>
      <div className="todo-elm">
        {isEditing ? (
          <div className="editingcontain">
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button className="todo-btn-save" onClick={handleSaveEdit}>
              Save
            </button>
            <button className="todo-btn-cancel" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        ) : (
          <div className="edit">
            <p>{todoItem.text}</p>
            <button className="todo-btn" onClick={handleEdit}>
              ✏️
            </button>
          </div>
        )}
        {isMarkButtonVisible && (
          <button className="todo-btn" onClick={handleClick}>
            ☑️
          </button>
        )}
      </div>
    </li>
  );
};

export default Todo;
