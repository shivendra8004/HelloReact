import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, loading } = useFetch("http://localhost:5500/blogs/" + id);
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && <div>{blog.title}</div>}
    </>
  );
};

export default BlogDetails;
