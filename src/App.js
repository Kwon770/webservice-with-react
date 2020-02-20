import React from "react";
import Potato from "./Potato.js";

// To work from localhost web, Do '$ npm start' and Don't kill console

// Automatic refesh web from react
// Generate element with react and App.js
// and Put html in div.id=root of index.html virtually

// Food(props) : props is object. object.name
// Food({ name }) : name is value. name
function Like({ name, img }) {
  // Make alt="" to avoid warning
  return (
    <div>
      <h1>I also like {name}</h1>
      <img src={img} alt={name}></img>
    </div>
  );
}

const gameILike = [
  {
    id: 1,
    name: "RS6",
    image:
      "https://w.namu.la/s/0684acaa1c614dd71c1d8dfcdd93e442d6d448eeffe26327a6729ccb1a57cdc8a3747cff9efeae90a1a7bb474463918a44bd2f00f68ce4869955acb745e4fb01619818165ebff3d4f330d779538607ba6f2ea1b8f708ef7b94200d66b2a55b63"
  },
  {
    id: 2,
    name: "Tarkov",
    image:
      "https://ww.namu.la/s/0172241fbd015b40724cffdb4e6cfafaf29e9630a63b94541527b3be7c42bdc765ce59a0b9e628e2f94303453739ea733da03fffab11f7199bcca39c3ae8b83670e260d51bc0f36cac4b0e61f02c8b9c507aa1566cd9215e814f624750cbdfc6b7e4636996a55ed5480adb7400fb4b68"
  }
];

function App() {
  // Keep element unique, Make id in list and Send key={element.id} to component
  return (
    <div>
      <h1>Hello!</h1>
      <Potato />
      <Like name="kimchi" isKoreans={true} />
      <Like name="cheese" isKoreans={false} />
      <Like name="sushi" isKoreans={false} />
      {gameILike.map(ele => (
        <Like key={ele.id} name={ele.name} img={ele.image} />
      ))}
    </div>
  );
}

export default App;
