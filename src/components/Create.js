const Create = () => {
  return (
    <div className="create">
      <h2>Create a New Blog!</h2>
      <form>
        <label>Blog Title</label>
        <input type="text" required />
        <label>Author</label>
        <select>
          <option value="shivendra">Shivendra Jat</option>
          <option value="jyoti">Jyoti Kumari</option>
          <option value="anandi">Anindya Ram Tripathi</option>
          <option contentEditable value="other">
            <input type="text" />
          </option>
        </select>
        <label>Write your blog</label>
        <textarea required cols="30" rows="10"></textarea>
        <button type="submit"> Done</button>
      </form>
    </div>
  );
};

export default Create;
