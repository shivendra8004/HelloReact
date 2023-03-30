import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch("http://localhost:5500/blogs/");
  return (
    <>
      <div>
        <h2>Blog Details</h2>
        <p>Blog Number {id} </p>
      </div>
    </>
  );
};

export default BlogDetails;
