import React from "react";

// function Greet() {
//   return <h1>Hello Shiva</h1>;
// }

const Greet = (props) => {
  return (
    <h1>
      Hello {props.name} who's age is {props.age}
    </h1>
  );
};
export default Greet;
