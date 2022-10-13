import './App.css';
import Navbar from './components/Navbar';
function App() {
  const title = "Hello, Lets Learn Multiple Components";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default App;
