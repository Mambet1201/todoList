import React, { useState } from "react";

const MyNote = ({ todos }) => {
  return (
    <div className="myNote">
      <ul>
        {todos
          .sort((a, b) => (a.completed < b.completed ? -1 : 1))
          .map((el, index) => {
            if (index < 3) {
              return (
                <div className="liBlock">
                  <li>
                    <input disabled checked={el.completed} type="checkbox" />
                    <label className={el.completed ? "done" : ""}>
                      {el.note}
                    </label>
                  </li>
                </div>
              );
            }
          })}

        {todos.length > 3 ? (
          <strong>И еще {todos.length - 3} ...</strong>
        ) : todos.length === 0 ? (
          <h3>В этой категории еще нет задач</h3>
        ) : null}
      </ul>
    </div>
  );
};

export default MyNote;
