import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddNotes = ({ todos, setTodos, setAddState }) => {
  const [inputTitle, setInputTitle] = useState("");

  const NewNote = () => {
    setTodos([...todos, { title: inputTitle, tasks: [], id: uuidv4() }]);
    setInputTitle("");
    setAddState(false);
  };
  return (
    <div className="addNotes">
      <input
        type="text"
        value={inputTitle}
        onChange={({ target }) => setInputTitle(target.value)}
        placeholder="Назовите заметку"
      />
      <button disabled={!inputTitle.trim()} onClick={() => NewNote()}>
        Создать
      </button>
    </div>
  );
};

export default AddNotes;
