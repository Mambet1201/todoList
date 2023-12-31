import React, { useState } from "react";

const AddNewTask = ({ addTask, taskTitle, setTaskTitle }) => {
  return (
    <div>
      <input
        placeholder="Название задачи..."
        value={taskTitle}
        onChange={({ target }) => setTaskTitle(target.value)}
        type="text"
      />
      <button disabled={!taskTitle.trim().length > 0} onClick={addTask}>
        Добавить
      </button>
    </div>
  );
};

export default AddNewTask;
