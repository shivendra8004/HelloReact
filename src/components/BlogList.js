import { Link } from "react-router-dom";

const BlogList = ({ blogs, heading }) => {
  return (
    <div className="blog-list">
      <h2>{heading}</h2>
      {blogs.length ? (
        blogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`}>
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </div>
          </Link>
        ))
      ) : (
        <div>
          <h2>No Posts</h2>
          <p>The posts you create will show up here!</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
