import React from "react";
import Potato from "./Potato.js";

// To work from localhost web, Do '$ npm start' and Don't kill console

// Automatic refesh web from react
// Generate element with react and App.js
// and Put html in div.id=root of index.html virtually

// Food(props) : props is object. object.name
// Food({ name }) : name is value. name
function Food({ name }) {
  return <h1>I also like {name}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Potato />
      <Food name="kimchi" isKoreanFood={true} />
      <Food name="cheese" isKoreanFood={false} />
      <Food name="sushi" isKoreanFood={false} />
    </div>
  );
}

export default App;
