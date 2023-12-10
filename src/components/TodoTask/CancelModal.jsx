import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CancelModal = ({ cancelModal, setCancelModal }) => {
  const navigate = useNavigate();

  const cancelBlock = () => {
    setCancelModal(true);
    navigate("/");
  };
  return (
    <div className={cancelModal ? "modalBlock" : "none"}>
      <h2>Подтвердить выбранное действи?</h2>
      <div className="buttons">
        <button onClick={cancelBlock}>Подтвердить</button>
        <button className="deleteBtn" onClick={() => setCancelModal(false)}>
          Отменить
        </button>
      </div>
    </div>
  );
};

export default CancelModal;
