import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import MyTask from "./MyTask";
import ModalBlock from "./ModalBlock";
import { SlActionRedo } from "react-icons/sl";
import { SlActionUndo } from "react-icons/sl";
import CancelModal from "./CancelModal";

const TodoItem = ({ todos, setTodos }) => {
  const { id } = useParams();
  const [taskTitle, setTaskTitle] = useState("");
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [myTodos, setMyTodos] = useState(
    todos.find((el) => el.id === id).tasks
  );
  const [modalpage, setModalPage] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);

  const changeCheckbox = (idx) => {
    setMyTodos(
      myTodos.map((el, index) =>
        index === idx ? { ...el, completed: !el.completed } : el
      )
    );
    setUndoStack((prev) => [...prev, myTodos]);
    setRedoStack([]);
  };
  const deleteTask = (id) => {
    setMyTodos(myTodos.filter((el) => el.id !== id));
    setUndoStack((prev) => [...prev, myTodos]);
    setRedoStack([]);
  };
  const addTask = () => {
    setMyTodos([
      ...myTodos,
      { completed: false, note: taskTitle, id: uuidv4() },
    ]);
    setTaskTitle("");
    setUndoStack((prev) => [...prev, myTodos]);
    setRedoStack([]);
  };

  const saveChange = () => {
    setTodos(
      todos.map((el) => (el.id === id ? { ...el, tasks: myTodos } : el))
    );
  };

  const haldleUndo = () => {
    setMyTodos(undoStack.at(-1));
    setUndoStack(undoStack.slice(0, -1));
    setRedoStack([...redoStack, myTodos]);
  };

  const handleRedo = () => {
    setMyTodos(redoStack.at(-1));
    setRedoStack(redoStack.slice(0, -1));
  };
  return (
    <div className="todoItem">
      <ModalBlock
        modal={modalpage}
        setModal={setModalPage}
        id={id}
        setTodos={setTodos}
        todos={todos}
      />
      <CancelModal cancelModal={cancelModal} setCancelModal={setCancelModal} />
      <div className="addNotes">
        <h3>{todos.find((el) => el.id === id).title.toUpperCase()}</h3>
        <input
          placeholder="Название задачи..."
          value={taskTitle}
          onChange={({ target }) => setTaskTitle(target.value)}
          type="text"
        />
        <button
          disabled={!taskTitle.trim().length > 0}
          onClick={() => addTask()}
        >
          Добавить
        </button>
      </div>
      <div className="itemNotes">
        {myTodos.map((el, index) => (
          <MyTask
            id={el.id}
            el={el}
            index={index}
            changeCheckbox={changeCheckbox}
            deleteTask={deleteTask}
            setRedoStack={setRedoStack}
            setUndoStack={setUndoStack}
            myTodos={myTodos}
            setMyTodos={setMyTodos}
          />
        ))}
      </div>
      <div className="itemButtons">
        <button
          className="undo"
          disabled={undoStack.length === 0}
          onClick={() => haldleUndo()}
        >
          <SlActionUndo />
        </button>
        <button
          className="redo"
          disabled={redoStack.length === 0}
          onClick={() => handleRedo()}
        >
          <SlActionRedo />
        </button>

        <button className="cancelBtn" onClick={() => setCancelModal(true)}>
          Отменить
        </button>

        <button className="deleteBtn" onClick={() => setModalPage(!modalpage)}>
          Удалить
        </button>
        <Link to="/">
          <button className="saveBtn" onClick={() => saveChange()}>
            Сохранить
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TodoItem;
