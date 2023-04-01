import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="not-found">
      <h2>Oops, Sorry</h2>
      <p>That page does'nt Exists</p>
      <Link to="/">Come Back Home</Link>
    </div>
  );
};

export default Error;
