import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  let [blogs, setBlogs] = useState(null);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    console.log("Use Effect");
  }, []);
  return (
    <div className="home">
      <BlogList blogs={blogs} heading={"All Blogs"} handleDelete={handleDelete} />
    </div>
  );
};
export default Home;
