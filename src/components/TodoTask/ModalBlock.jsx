import React from "react";
import { Link } from "react-router-dom";

const ModalBlock = ({ modal, setModal, todos, setTodos, id }) => {
  const deleteNote = () => {
    setTodos(todos.filter((el) => el.id !== id));
    setModal(false);
  };
  return (
    <div className={modal ? "modalBlock" : "none"}>
      <h2>Подтвердить выбранное действи?</h2>
      <div className="buttons">
        <Link to="/">
          <button onClick={() => deleteNote(true)}>Подтвердить</button>
        </Link>

        <button className="deleteBtn" onClick={() => setModal(false)}>
          Отменить
        </button>
      </div>
    </div>
  );
};

export default ModalBlock;
