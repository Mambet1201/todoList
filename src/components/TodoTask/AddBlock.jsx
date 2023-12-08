import React, { useState } from "react";
import AddNotes from "./AddNotes";

const AddBllock = ({ todos, setTodos }) => {
  const [addState, setAddState] = useState(false);
  return (
    <div className="addNotesBlock">
      {addState ? (
        <AddNotes todos={todos} setTodos={setTodos} setAddState={setAddState} />
      ) : (
        <button onClick={() => setAddState(true)} className="addNote">
          Создать новую заметку
        </button>
      )}
    </div>
  );
};

export default AddBllock;
