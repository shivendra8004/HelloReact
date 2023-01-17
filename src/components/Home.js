import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs] = useState([
    {
      title: "My new Website",
      body: "Lorem lepsum....",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome Party",
      body: "Lorem lepsum....",
      author: "Yoshi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "Lorem lepsum....",
      author: "Shiva",
      id: 3,
    },
    { title: "Our God", body: "Jai shree ram....", author: "Hello", id: 4 },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
