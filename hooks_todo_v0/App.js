import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    "Finish homework",
    "Wash dishes",
    "Clean room",
    "Make waffles",
  ]);

  function addTodo(todo) {
    return setTodos([...todos, { todo }]);
  }

  return (
    <div>
      todo
      <TodoList todos={todos} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
