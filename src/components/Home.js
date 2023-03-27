import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5500/blogsd")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("Could not fetch data from database");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return (
    <div className="home">
      {error && <div className="errorDiv "> {error}</div>}

      {loading && <div className="loadingDiv">Loading Blogs...</div>}
      {blogs && !error && <BlogList blogs={blogs} heading={"All Blogs"} />}
    </div>
  );
};
export default Home;
