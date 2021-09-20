import React from "react";

const Todo = (props) => <li>{props.todo}</li>;

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <Todo todo={todo} key={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
