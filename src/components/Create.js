import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("hii");
  return (
    <div className="create">
      <h2>Create a New Blog!</h2>
      <form>
        <label>Blog Title</label>
        <input type="text" required value={title} />
        <label>Author</label>
        <select>
          <option value="shivendra">Shivendra Jat</option>
          <option value="jyoti">Jyoti Kumari</option>
          <option value="anandi">Anindya Ram Tripathi</option>
          <option value="other">Other</option>
        </select>
        <label>Write your blog</label>
        <textarea required cols="30" rows="10"></textarea>
        <button type="submit"> Done</button>
      </form>
    </div>
  );
};

export default Create;
