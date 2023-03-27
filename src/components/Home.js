import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5500/blogs")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          setError("Could not fetch data from database");
          throw Error("Could not fetch data from database");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
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
