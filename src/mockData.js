import { v4 as uuidv4 } from "uuid";

const defaultTodos = [
  {
    title: "Работа",
    tasks: [
      { completed: false, note: "Созвониться С поставщиками", id: 1 },
      { completed: false, note: "Согласовать отпуск", id: 2 },
      { completed: false, note: "Заказать гостиницу", id: 3 },
      { completed: false, note: "Запомнить ФИО руководителя", id: 4 },
    ],
    id: uuidv4(),
  },
  {
    title: "Хобби",
    tasks: [
      { completed: false, note: "Заказать удочку", id: 1 },
      { completed: false, note: "Проверить экипировку", id: 2 },
      { completed: false, note: "Ввыключить телефон", id: 3 },
      {
        completed: false,
        note: "Проверить машину перед поездкой",
        id: 4,
      },
      { completed: false, note: "Сделать что-то важное ", id: 5 },
      { completed: false, note: "Сделать что-то важное ", id: 6 },
      { completed: false, note: "Сделать что-то важное ", id: 7 },
      { completed: false, note: "Сделать что-то важное ", id: 8 },
    ],
    id: uuidv4(),
  },
  {
    title: "Спорт",
    tasks: [
      { completed: false, note: "Продлить абонимент", id: 1 },
      {
        completed: false,
        note: "Согласовать тренировку на утро",
        id: uuidv4(),
      },
      { completed: false, note: "Заказать спортивное питание", id: 2 },
      {
        completed: false,
        note: "Заставить друга пойти в спортзал ",
        id: uuidv4(),
      },
      { completed: false, note: "Сделать что-то важное ", id: 3 },
      { completed: false, note: "Сделать что-то важное ", id: 4 },
    ],
    id: uuidv4(),
  },
  {
    title: "Семья",
    tasks: [
      {
        completed: false,
        note: "ДР племянника купить игрушку",
        id: uuidv4(),
      },
      { completed: false, note: "Съездить за продуктами", id: uuidv4() },
      { completed: false, note: "Забрать товары с WB", id: uuidv4() },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
      { completed: false, note: "Сделать что-то важное ", id: uuidv4() },
    ],
    id: uuidv4(),
  },
];
export default defaultTodos;
