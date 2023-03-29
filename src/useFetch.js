import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortConst = new AbortController();

    setLoading(true);
    fetch(url, { signal: abortConst.signal })
      .then((res) => {
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
    return () => {
      abortConst.abort();
    };
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
