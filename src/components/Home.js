import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  const { data, loading, error } = useFetch("http://localhost:5500/blogs");
  const blogs = data;
  return (
    <div className="home">
      {error && <div className="errorDiv "> {error}</div>}
      {loading && <div className="loadingDiv">Loading Blogs...</div>}
      {blogs && !error && <BlogList blogs={blogs} heading={"All Blogs"} />}
    </div>
  );
};
export default Home;
