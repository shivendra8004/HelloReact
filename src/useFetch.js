import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect((url) => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("Could not fetch data from database");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return { data, loading, error };
};

export default useFetch;
