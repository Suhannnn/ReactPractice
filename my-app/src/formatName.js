import React from "react";

function formatName() {
  const firstName = "Harper";
  const lastName = "Perez";
  return (
    <div>
      <h1>{firstName + " " + lastName}</h1>
    </div>
  );
}

export default formatName;
