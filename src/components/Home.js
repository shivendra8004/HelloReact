import { useState } from "react";

const Home = () => {
    const [name,setName]=useState('Shiva');
    const [age,setAge]=useState(25);
    const handleClick=()=>{
        setName("Shivendra");
        setAge(19);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p >{name} is {age} years old</p>
            <button className="btn" onClick={handleClick}>
                Click
            </button>
        </div>
     );
}
 
export default Home;