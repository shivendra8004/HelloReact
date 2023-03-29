import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
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
