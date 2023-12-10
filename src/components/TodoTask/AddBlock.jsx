import React, { useState } from "react";
import AddNotes from "./AddNotes";

const AddBllock = ({ todos, setTodos }) => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className="addNotesBlock">
      {showInput ? (
        <AddNotes
          todos={todos}
          setTodos={setTodos}
          setShowInput={setShowInput}
        />
      ) : (
        <button onClick={() => setShowInput(true)} className="addNote">
          Создать новую заметку
        </button>
      )}
    </div>
  );
};

export default AddBllock;
