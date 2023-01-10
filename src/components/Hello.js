import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello Shiv</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { className: "shiv" },
    React.createElement("h1", { id: "hi" }, "Hello Shiv")
  );
};
export default Hello;
