const Home = () => {

    const handleClick=(e)=>{
        console.log("Good Morning ",e.target);
    }
    const handleClickAgain=(name)=>{
        alert("Good Morning "+name);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button className="btn" onClick={handleClick}>
                Click
            </button>
            <button className="btbt" onClick={()=>handleClickAgain("Shivendra")}>
                Click Me Yrr
            </button>
        </div>
     );
}
 
export default Home;