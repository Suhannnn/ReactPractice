import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

function LoginControl() {
  return (
    <div>
      <div>
        <LoginButton />
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}

export default LoginControl;
