import { useState } from "react";

const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:'My new Website',body:'Lorem lepsum....',author:'mario',id:1},
        {title:'Welcome Party',body:'Lorem lepsum....',author:'Yoshi',id:2},
        {title:'Web dev top tips',body:'Lorem lepsum....',author:'Shiva',id:3},
        {title:'Our God',body:'Jai shree ram....',author:'Hello',id:4}
    ]);
    return ( 
        <div className="home"> 
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <p>{blog.body}</p>
            </div>
        ))}
        </div>
     );
}
 
export default Home;