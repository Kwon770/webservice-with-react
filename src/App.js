import React from "react";
import Potato from "./Potato.js";

// To work from localhost web, Do '$ npm start' and Don't kill console

// Automatic refesh web from react
// Generate element with react and App.js
// and Put html in div.id=root of index.html virtually

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Potato />
    </div>
  );
}

export default App;
