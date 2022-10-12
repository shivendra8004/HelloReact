import './App.css';

function App() {
  const title = "Hello, Lets Learn React Variables and Dynamic Values";
  const obj ={ name:"Shiva", age: 19, enr:""};
  var link ;
  var num=1;
  if(num<4){
    link="https://www.google.com";
  }
  else{
    link="https://www.youtube.com";
  }
  return (
    <div className="App">
      <div className="content">
        <h1 className="heading">Dynamic Values</h1>
        <strong>{title}</strong>
        <p>{Math.random()*10}</p>
        <p>{obj.name}</p>
        <a href={link} target="_blank" rel="noreferrer" >Google</a>
      </div>
    </div>
  );
}

export default App;
