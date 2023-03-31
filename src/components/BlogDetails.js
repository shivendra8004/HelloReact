import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, loading } = useFetch("http://localhost:5500/blogs/" + id);
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h3>Written by {blog.author}</h3>
          <p>{blog.body}</p>
        </article>
      )}
    </>
  );
};

export default BlogDetails;
