import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5500/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="home">
      {loading && <div>Loading Blogs...</div>}

      {blogs && <BlogList blogs={blogs} heading={"All Blogs"} />}
    </div>
  );
};
export default Home;
