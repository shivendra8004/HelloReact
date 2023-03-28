import { useState, useEffect } from "react";
const useFetch = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5500/blogs")
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
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
};

export default useFetch;
