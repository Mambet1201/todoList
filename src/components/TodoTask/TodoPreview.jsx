import React, { useState } from "react";

const TodoPreview = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>В этой категории еще нет задач</p>;
  }

  return (
    <div className="todoPreview">
      <ul>
        {tasks.slice(0, 3).map((el) => {
          return (
            <li key={el.id} className="liBlock">
              <input disabled checked={el.completed} type="checkbox" />
              <label className={el.completed ? "done" : ""}>{el.note}</label>
            </li>
          );
        })}
        {tasks.length > 3 && <span>И еще {tasks.length - 3} ...</span>}
      </ul>
    </div>
  );
};

export default TodoPreview;
