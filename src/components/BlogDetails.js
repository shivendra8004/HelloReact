import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";
const BlogDetails = () => {
  const [deleting, setDeleting] = useState(false);
  const { id } = useParams();
  const { data: blog, error, loading } = useFetch("http://localhost:5500/blogs/" + id);
  const HandleDelete = (id) => {
    setDeleting(true);
    fetch("http://localhost:5500/blogs/" + blog.id, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Blog deleted");
        setDeleting(false);
      })
      .catch((error) => {
        console.log(error);
        setDeleting(false);
      });
  };
  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h3>Written by {blog.author}</h3>
          <p>{blog.body}</p>
          {!deleting && <button onClick={HandleDelete}>Delete</button>}
          {deleting && <button disabled>Deleting..</button>}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
