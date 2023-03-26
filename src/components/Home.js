import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  let [blogs, setBlogs] = useState(null);
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
  return <div className="home">{blogs && <BlogList blogs={blogs} heading={"All Blogs"} />}</div>;
};
export default Home;
