import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("Title of Blog!");
  const [body, setBlog] = useState("Write your best blog here!");
  const [author, setAuthor] = useState("jyoti");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const HandleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    fetch("http://localhost:5500/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        setLoading(false);
        console.log("New Blog Added");
        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className="create">
      <h2>Create a New Blog!</h2>
      <form onSubmit={HandleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Author</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="shivendra">Shivendra Jat</option>
          <option value="jyoti">Jyoti Kumari</option>
          <option value="anandi">Anindya Ram Tripathi</option>
          <option value="other">Other</option>
        </select>
        <label>Write your blog</label>
        <textarea
          required
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => {
            setBlog(e.target.value);
          }}
        ></textarea>
        <div>
          <Link className="link" to="/">
            Home
          </Link>
          {loading && <button disabled> Publishing...</button>}
          {!loading && <button> Publish</button>}
        </div>
      </form>
    </div>
  );
};

export default Create;
