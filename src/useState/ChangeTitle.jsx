import React, { useState } from "react";

const ChangeTitle = () => {
  const [title, setTitle] = useState("Hello world");

  const handleClick = () => {
    if (title === "Hello world") {
      setTitle("Hello new world");
    } else {
      setTitle("Hello world1");
    }
  };

  return (
    <>
      <div className="container text-center">
        <h1 className="display-1">{title}</h1>
        <button onClick={handleClick} className="btn btn-success">
          Chanhg Title
        </button>
      </div>
    </>
  );
};

export default ChangeTitle;
