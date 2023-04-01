import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, loading } = useFetch("http://localhost:5500/blogs/" + id);
  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h3>Written by {blog.author}</h3>
          <p>{blog.body}</p>
          <button>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
