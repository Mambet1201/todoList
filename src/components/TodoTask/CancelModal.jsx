import React from "react";
import { Link } from "react-router-dom";

const CancelModal = ({ cancelModal, setCancelModal }) => {
  return (
    <div className={cancelModal ? "modalBlock" : "none"}>
      <h2>Подтвердить выбранное действи?</h2>
      <div className="buttons">
        <Link to="/">
          <button onClick={() => setCancelModal(true)}>Подтвердить</button>
        </Link>

        <button className="deleteBtn" onClick={() => setCancelModal(false)}>
          Отменить
        </button>
      </div>
    </div>
  );
};

export default CancelModal;
