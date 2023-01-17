const Home = () => {
  const handleClick = (e) => {
    console.log("Hello Guys", e);
  };
  const handleClick2 = (name, e) => {
    console.log("Hello " + name, e.target);
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Click Here Again
      </button>
      <button
        onClick={(e) => {
          handleClick2("Shiv", e);
        }}
      >
        Click Here
      </button>
    </div>
  );
};
export default Home;
