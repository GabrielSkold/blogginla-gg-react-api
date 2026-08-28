import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let response = await fetch("https://dummyjson.com/posts");
      let data = await response.json();
      setPosts(data.posts);
    };

    getData();
  }, []);
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li>
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
