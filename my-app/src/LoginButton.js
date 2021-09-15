import React from "react";

function LoginButton(props) {
  return (
    <div>
      <button onclick={props.onClick}> Login</button>
    </div>
  );
}

export default LoginButton;
