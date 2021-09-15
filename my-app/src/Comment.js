import React from "react";

function Comment(props) {
  function formatDate(date) {
    return date.toLocaleDateString();
  }

  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          src={props.author.avatarUrl}
          alt={props.author.name}
          className="Avatar"
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
