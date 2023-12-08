import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";

const MyTask = ({
  id,
  el,
  index,
  changeCheckbox,
  deleteTask,
  myTodos,
  setMyTodos,
  setUndoStack,
  setRedoStack,
}) => {
  const [inputState, setInputState] = useState(false);
  const [editedTitle, setEditedtitle] = useState(el.note);

  const changeTitle = () => {
    setMyTodos(
      myTodos.map((el) => (el.id === id ? { ...el, note: editedTitle } : el))
    );
    setUndoStack((prev) => [...prev, myTodos]);
    setRedoStack([]);
    setInputState(false);
  };

  return (
    <div
      className="myTask"
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: " 10px 0",
      }}
    >
      {inputState ? (
        <input
          type="text"
          value={editedTitle}
          onChange={({ target }) => setEditedtitle(target.value)}
        />
      ) : (
        <div>
          <input
            type="checkbox"
            onChange={() => changeCheckbox(index)}
            checked={el.completed}
          />
          <label className={el.completed ? "done" : ""}> {el.note}</label>
        </div>
      )}
      {inputState ? (
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => changeTitle()}>
            <IoCheckmarkDoneSharp color="green" />
          </button>
          <button onClick={() => setInputState(false)}>
            <ImCancelCircle color="red" />
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => setInputState(true)}>
            <GrEdit color="red" />
          </button>
          <button onClick={() => deleteTask(el.id)}>
            <MdDeleteForever color="red" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MyTask;
