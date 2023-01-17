import React, { useState } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: " wqeuher qwotjdaf asfhp wet wqea hgdfdsk ew glaff hgel  ",
      auther: "Shivendra Jat",
      id: 1,
    },
    {
      title: "Welcome Party ",
      body: " wqeuher qwotjdaf asfhp wet wqea hgdfdsk ew glaff hgel  ",
      auther: "Jyoti Kumari",
      id: 2,
    },
    {
      title: "Web Dev Tips and Tricks",
      body: " wqeuher qwotjdaf asfhp wet wqea hgdfdsk ew glaff hgel  ",
      auther: "Anindya Ram",
      id: 3,
    },
    {
      title: "The Net Ninja Channel",
      body: " wqeuher qwotjdaf asfhp wet wqea hgdfdsk ew glaff hgel  ",
      auther: "The Net Ninja",
      id: 4,
    },
  ]);
  return (
    <div className="home">
      <h2>Home Page</h2>
    </div>
  );
};
export default Home;
