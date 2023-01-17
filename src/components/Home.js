import React from "react";
import { useState } from "react";

const Home = () => {
  let [name, setName] = useState("Shivendra Jat");
  const [age, setAge] = useState(19);
  const handleClick = () => {
    setName("Shiva");
    setAge(20);
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        {name} {age}
      </p>
      <button onClick={() => handleClick()}>Click Here</button>
    </div>
  );
};
export default Home;
