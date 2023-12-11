import React, { useState } from "react";
import { SlActionRedo } from "react-icons/sl";
import { SlActionUndo } from "react-icons/sl";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";
import Task from "./Task";
import ModalBlock from "./ModalBlock";
import CancelModal from "./CancelModal";
import AddTask from "./AddNewTask";
import AddNewTask from "./AddNewTask";

const ItemPage = ({ todos, setTodos }) => {
  const { id } = useParams();

  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [myTodos, setMyTodos] = useState(
    todos.find((el) => el.id === id).tasks
  );
  const [taskTitle, setTaskTitle] = useState("");
  const [modalpage, setModalPage] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);

  const changeCheckbox = (id) => {
    setMyTodos(
      myTodos.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
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

  const handleUndo = () => {
    setMyTodos(undoStack.at(-1));
    setUndoStack(undoStack.slice(0, -1));
    setRedoStack([...redoStack, myTodos]);
  };

  const handleRedo = () => {
    setMyTodos(redoStack.at(-1));
    setRedoStack(redoStack.slice(0, -1));
  };
  const itemTitle = todos.find((el) => el.id === id).title.toUpperCase();
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
        <h3>{itemTitle}</h3>
        <AddNewTask addTask={addTask} taskTitle={taskTitle}
          setTaskTitle={setTaskTitle} />
      </div>
      <div className="itemNotes">
        {myTodos.map((el, index) => (
          <Task
            key={el.id}
            id={el.id}
            note={el.note}
            completed={el.completed}
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
          onClick={() => handleUndo()}
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
          <button className="saveBtn" onClick={saveChange}>
            Сохранить
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemPage;
