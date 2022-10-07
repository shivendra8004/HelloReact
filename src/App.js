import './App.css';

function App() {
  const title = "Hello, Lets Learn React Variables and Dynamic Values";
  return (
    <div className="App">
      <div className="content">
        <h1 className="heading">Dynamic Values</h1>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default App;
