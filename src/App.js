import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
function App() {
  const title = "Hello, Lets Learn Multiple Components";
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <div className="content">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default App;
