const Create = () => {
  return (
    <div className="create">
      <h2>Create a New Blog!</h2>
      <form>
        <label>Blog Title</label>
        <input type="text" />
        <label>Author</label>
        <input type="text" />
        <label>Write your blog</label>
        <textarea cols="30" rows="10"></textarea>
      </form>
    </div>
  );
};

export default Create;
