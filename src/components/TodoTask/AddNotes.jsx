import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddNotes = ({ todos, setTodos, setShowInput }) => {
  const [newTitle, setNewTitle] = useState("");

  const addNote = () => {
    const newTodo = { title: newTitle, tasks: [], id: uuidv4() };
    setTodos([...todos, newTodo]);
    setNewTitle("");
    setShowInput(false);
  };
  return (
    <div className="addNotes">
      <input
        type="text"
        value={newTitle}
        onChange={({ target }) => setNewTitle(target.value)}
        placeholder="Назовите заметку"
      />
      <button disabled={!newTitle.trim()} onClick={addNote}>
        Создать
      </button>
    </div>
  );
};

export default AddNotes;
