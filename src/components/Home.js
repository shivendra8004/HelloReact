import React, { useState } from "react";
const Home = () => {
  let [blogs, setBlogs] = useState([
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
    {
      title: "The Net Ninja Channel",
      body: " wqeuher qwotjdaf asfhp wet wqea hgdfdsk ew glaff hgel  ",
      auther: "The Net Ninja",
      id: 5,
    },
    {
      title: "The Net Ninja Channel",
      body: " wqeuher qwotjdaf asfhp wet wqea hgdfdsk ew glaff hgel  ",
      auther: "The Net Ninja",
      id: 6,
    },
  ]);
  return (
    <div className="home">
      {blogs.map((blogs) => (
        <div className="blog-preview" key={blogs.id}>
          <h2>{blogs.title}</h2>
          <p>{blogs.body} </p>
        </div>
      ))}
    </div>
  );
};
export default Home;
