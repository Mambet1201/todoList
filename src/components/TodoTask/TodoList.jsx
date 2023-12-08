import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import ModalBlock from "./ModalBlock";
import AddBllock from "./AddBlock";
import MyNote from "./MyNote";

const TodoList = ({ todos, setTodos }) => {
  const [modal, setModal] = useState(false);
  const [idd, setIdd] = useState("");
  const foo = (id) => {
    setIdd(id);
    setModal(true);
  };

  return (
    <div>
      <div className="container">
        <ModalBlock
          modal={modal}
          setModal={setModal}
          id={idd}
          setTodos={setTodos}
          todos={todos}
        />
        <h1>Заметки</h1>
        <AddBllock todos={todos} setTodos={setTodos} />
        <div className="cont">
          {todos?.map(({ title, tasks, id }) => (
            <div className=" infoBlock">
              <div className="title">
                <h2>{title}</h2>
                <div className="icons">
                  <Link to={`/${id}`}>
                    <GrEdit onClick={() => setIdd(id)} color="red" />
                  </Link>
                  <Link>
                    <MdDeleteForever onClick={() => foo(id)} color="red" />
                  </Link>
                </div>
              </div>

              <MyNote todos={tasks} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
