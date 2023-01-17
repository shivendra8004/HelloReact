const Home = () => {
  let name = "Shivendra Jat";
  const handleClick = () => {
    console.log("Hello Guys");
    name = "Shiva";
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <p> {name} </p>
      <button onClick={() => handleClick()}>Click Here</button>
    </div>
  );
};
export default Home;
