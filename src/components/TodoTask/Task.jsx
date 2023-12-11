import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";

const Task = ({
  id,
  note,
  completed,
  changeCheckbox,
  deleteTask,
  myTodos,
  setMyTodos,
  setUndoStack,
  setRedoStack,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTitle, setEditedtitle] = useState(note);

  const changeTitle = () => {
    setMyTodos(
      myTodos.map((el) => (el.id === id ? { ...el, note: editedTitle } : el))
    );
    setUndoStack((prev) => [...prev, myTodos]);
    setRedoStack([]);
    setIsEdit(false);
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
      {isEdit ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={({ target }) => setEditedtitle(target.value)}
          />
          <div>
            <button onClick={() => changeTitle()}>
              <IoCheckmarkDoneSharp color="green" />
            </button>
            <button onClick={() => setIsEdit(false)}>
              <ImCancelCircle color="red" />
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            onChange={() => changeCheckbox(id)}
            checked={completed}
          />
          <label className={completed ? "done" : ""}> {note}</label>
          <div>
            <button onClick={() => setIsEdit(true)}>
              <GrEdit color="red" />
            </button>
            <button onClick={() => deleteTask(id)}>
              <MdDeleteForever color="red" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
