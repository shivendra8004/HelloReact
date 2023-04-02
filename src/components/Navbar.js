import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blossom Blogs</h1>
      <div className="links">
        <button>Filter</button>
        <Link to="/create">New Post</Link>
      </div>
    </nav>
  );
};

export default Navbar;
