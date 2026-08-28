import axios from "axios";
import "./App.css";

function App() {
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
