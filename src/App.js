import "./App.css";
function App() {
  const title = "Hey Welcome to the New blog";
  const likes = 50;
  const link =
    "https://www.youtube.com/watch?v=0sSYmRImgRY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=5";
  return (
    <div className="App">
      <div className="content">
        <h1>Dojo Blog</h1>
        <p>{title}</p>
        <h4>Likes {likes} times</h4>
        <a href={link}> Youtube</a>
      </div>
    </div>
  );
}

export default App;
