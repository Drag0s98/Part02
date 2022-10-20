import React from "react";

function Content(props) {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      {props.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <b>Total of {total} exercises</b>
    </div>
  );
}

export default Content;
