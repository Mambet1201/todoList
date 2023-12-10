import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import defaultTodos from "./mockData";
import MainPage from "./components/TodoTask/MainPage";
import ItemPage from "./components/TodoTask/ItemPage";

import "./App.css";

const storageTodos = localStorage.getItem("initialTodos");

function Appp() {
  const [todos, setTodos] = useState(JSON.parse(storageTodos) || defaultTodos);

  useEffect(() => {
    localStorage.setItem("initialTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="Appp">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage todos={todos} setTodos={setTodos} />}
          />
          <Route
            path=":id"
            element={<ItemPage todos={todos} setTodos={setTodos} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Appp;
