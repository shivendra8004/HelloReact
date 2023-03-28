import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  return (
    <div className="home">
      {error && <div className="errorDiv "> {error}</div>}

      {loading && <div className="loadingDiv">Loading Blogs...</div>}
      {blogs && !error && <BlogList blogs={blogs} heading={"All Blogs"} />}
    </div>
  );
};
export default Home;
