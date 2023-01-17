import "./App.css";
function App() {
  const title = "Hey Welcome to the New blog";
  const likes = 50;
  return (
    <div className="App">
      <div className="content">
        <h1>Dojo Blog</h1>
        <p>{title}</p>
        <h4>Likes {likes} times</h4>
      </div>
    </div>
  );
}

export default App;
