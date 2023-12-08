import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import "./Appp.css";

const defaultTodos = [
  {
    title: "jod",
    tasks: [
      { completed: false, note: "Созвониться с поставщиками", id: uuidv4() },
      { completed: false, note: "Согласовать отпуск", id: uuidv4() },
      { completed: false, note: "Заказать гостиницу", id: uuidv4() },
      { completed: false, note: "Запомнить ФИО руководителя", id: uuidv4() },
    ],
    id: uuidv4(),
  },
  {
    title: "hobbi",
    tasks: [
      { completed: false, note: "Заказать удочку", id: uuidv4() },
      { completed: false, note: "Проверить экипировку", id: uuidv4() },
      { completed: false, note: "Ввыключить телефон", id: uuidv4() },
      {
        completed: false,
        note: "Проверить машину перед поездкой",
        id: uuidv4(),
      },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
    ],
    id: uuidv4(),
  },
  {
    title: "sport",
    tasks: [
      { completed: false, note: "Продлить аббонимент", id: uuidv4() },
      {
        completed: false,
        note: "Согласовать тренировку на утро",
        id: uuidv4(),
      },
      { completed: false, note: "Заказать спортивное питанеи", id: uuidv4() },
      {
        completed: false,
        note: "Заставить друга пойти в спортзал ",
        id: uuidv4(),
      },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
    ],
    id: uuidv4(),
  },
  {
    title: "famaly",
    tasks: [
      {
        completed: false,
        note: "день рождение племянника купить игрушку",
        id: uuidv4(),
      },
      { completed: false, note: "Съездить за продуктами", id: uuidv4() },
      { completed: false, note: "ЗАбрать товары с WB", id: uuidv4() },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
    ],
    id: uuidv4(),
  },
];
const storageTodos = localStorage.getItem("initialTodos");
console.log(JSON.parse(storageTodos));

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
            element={<TodoList todos={todos} setTodos={setTodos} />}
          />
          <Route
            path="/:id"
            element={<TodoItem todos={todos} setTodos={setTodos} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Appp;
