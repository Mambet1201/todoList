import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ModalBlock = ({ modal, setModal, todos, setTodos, id }) => {
  const navigate = useNavigate();
  const deleteNote = () => {
    setTodos(todos.filter((el) => el.id !== id));
    setModal(false);
    navigate("/");
  };
  return (
    <div className={modal ? "modalBlock" : "none"}>
      <h2>Подтвердить выбранное действи?</h2>
      <div className="buttons">
        <button onClick={() => deleteNote(true)}>Подтвердить</button>
        <button className="deleteBtn" onClick={() => setModal(false)}>
          Отменить
        </button>
      </div>
    </div>
  );
};

export default ModalBlock;
