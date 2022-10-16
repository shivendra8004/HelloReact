import { useState } from "react";

const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:'My new Website',body:'Lorem lepsum....',author:'mario',id:1},
        {title:'Welcome Party',body:'Lorem lepsum....',author:'Yoshi',id:2},
        {title:'Web dev top tips',body:'Lorem lepsum....',author:'Shiva',id:3}
    ]);
    return ( 
        <div className="home"> 
        <p>{}</p>
        </div>
     );
}
 
export default Home;