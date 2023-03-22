import React, { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  let [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: " wqeuher qwotjdaf asfhp wet wqea hgdfdsk ew glaff hgel  ",
      author: "Shivendra Jat",
      id: 1,
    },
    {
      title: "Welcome Party ",
      body: " wqeuher qwotjdaf asfhp wet wqea hgdfdsk ew glaff hgel  ",
      author: "Jyoti Kumari",
      id: 2,
    },
    {
      title: "Web Dev Tips and Tricks",
      body: " wqeuher qwotjdaf asfhp wet wqea hgdfdsk ew glaff hgel  ",
      author: "Anindya Ram",
      id: 3,
    },
    {
      title: "The Net Ninja Channel",
      body: " wqeuher qwotjdaf asfhp wet wqea hgdfdsk ew glaff hgel  ",
      author: "The Net Ninja",
      id: 4,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs"} />
    </div>
  );
};
export default Home;
