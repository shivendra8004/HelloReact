const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blossom Blogs</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" className="newBlog">
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
