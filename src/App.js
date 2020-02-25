import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  // path: "https://<URL>/<HASH>"" 이후 부분의 url
  // path="/about" => "https://<URL>/<HASH>/about"

  // exact={true} 일 경우, 정확하게 일치하는 path에서만 랜더링

  // Cause navigation has "Link" from "react-router-dom",
  // <Navigation> must be inside <HashRouter>
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
