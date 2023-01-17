const Home = () => {
  // const handleClick = () => {
  //   console.log("Hello Guys");
  // };
  const handleClick2 = (name) => {
    console.log("Hello " + name);
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <button
        onClick={() => {
          handleClick2("Shiv");
        }}
      >
        Click Here
      </button>
    </div>
  );
};
export default Home;
