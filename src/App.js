import "./App.css";
import style from "./style.css";
import { GiSpiderMask } from "react-icons/gi";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Post from "./Component/Post";
import { useState, useEffect } from "react";
function App() {
  const [show, setShow] = useState([]);
  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => setShow(json));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <span className="header_site">Inlämningsuppgift 3 - React Forum</span>
        <Switch>
          <Route exact path="/" render={() => <Home data={show} />}></Route>
          <Route path="/post/:id" render={() => <Post />}></Route>
        </Switch>
        <footer>
          <span>
            {" "}
            <GiSpiderMask /> By: Mohammad Awad{" "}
          </span>
        </footer>
      </header>
    </div>
  );
}

export default App;
