import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";

function Course(props) {
  return (
    <div>
      {props.course.map((course) => (
        <div key={course.id}>
          <Header name={course.name} />
          <Content parts={course.parts} />
        </div>
      ))}
    </div>
  );
}

export default Course;
