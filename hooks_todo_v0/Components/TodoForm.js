import React, { useState } from "react";

function TodoForm(addTodo) {
  const [todoInput, setTodoInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    return addTodo(todoInput);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default TodoForm;
