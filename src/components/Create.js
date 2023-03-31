const Create = () => {
  return (
    <div className="create">
      <h2>Create a New Blog!</h2>
      <form>
        <label>Blog Title</label>
        <input type="text" required />
        <label>Author</label>
        <input type="text" required />
        <label>Write your blog</label>
        <textarea required cols="30" rows="10"></textarea>
      </form>
    </div>
  );
};

export default Create;
