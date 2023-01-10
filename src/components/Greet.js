import React from "react";

// function Greet() {
//   return <h1>Hello Shiva</h1>;
// }

const Greet = (props) => {
  // props.name = "Shivendra";
  return (
    <div>
      <h1>
        Hello {props.name} who's age is {props.age}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
