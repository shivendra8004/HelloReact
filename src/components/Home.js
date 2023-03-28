import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  const { data: blogs, loading, error } = useFetch("http://localhost:5500/blogs");
  return (
    <div className="home">
      {error && <div className="errorDiv "> {error}</div>}
      {loading && <div className="loadingDiv">Loading Blogs...</div>}
      {blogs && !error && <BlogList blogs={blogs} heading={"All Blogs"} />}
    </div>
  );
};
export default Home;
