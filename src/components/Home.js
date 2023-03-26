import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  let [blogs, setBlogs] = useState(null);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    fetch("http://localhost:5500/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  return <div className="home">{<BlogList blogs={blogs} heading={"All Blogs"} handleDelete={handleDelete} />}</div>;
};
export default Home;
