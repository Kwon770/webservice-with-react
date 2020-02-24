import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  // path: "https://<URL>/<HASH>"" 이후 부분의 url
  // path="/about" => "https://<URL>/<HASH>/about"

  // exact={true} 일 경우, 정확하게 일치하는 path에서만 랜더링

  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
