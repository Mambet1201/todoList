import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import ModalBlock from "./ModalBlock";
import AddBllock from "./AddBlock";
import MyNote from "./TodoPreview";
import TodoPreview from "./TodoPreview";

const MainPage = ({ todos, setTodos }) => {
  const [modal, setModal] = useState(false);
  const [activeId, setActiveId] = useState("");

  const openDeleteModal = (id) => {
    setActiveId(id);
    setModal(true);
  };

  return (
    <div>
      <div className="container">
        <ModalBlock
          modal={modal}
          setModal={setModal}
          id={activeId}
          setTodos={setTodos}
          todos={todos}
        />
        <h1>Заметки</h1>
        <AddBllock todos={todos} setTodos={setTodos} />
        <div className="cont">
          {todos.map(({ title, tasks, id }) => (
            <div key={id} className="infoBlock">
              <div className="title">
                <h2>{title}</h2>
                <div className="icons">
                  <Link to={`/${id}`}>
                    <GrEdit size={24} color="green" />
                  </Link>
                  <MdDeleteForever
                    size={24}
                    cursor={"pointer"}
                    onClick={() => openDeleteModal(id)}
                    color="red"
                  />
                </div>
              </div>
              <TodoPreview tasks={tasks} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
