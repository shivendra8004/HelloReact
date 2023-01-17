import React from "react";
import { useState } from "react";

const Home = () => {
  let [name, setName] = useState("Shivendra Jat");
  const handleClick = () => {
    setName("Shiva");
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <p> {name} </p>
      <button onClick={() => handleClick()}>Click Here</button>
    </div>
  );
};
export default Home;
