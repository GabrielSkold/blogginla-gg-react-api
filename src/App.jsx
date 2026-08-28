import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let response = await axios.get("https://dummyjson.com/posts");
      setPosts(response.data.posts);
    };

    getData();
  }, []);
  return <></>;
}

export default App;
