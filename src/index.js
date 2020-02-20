import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// App : Component : The function what return HTML
// <App /> : The format what can use component

// When react use component to write HTML, code like this
// This combination (js and HTML) is JSX

// React Apllicagtion can render one component at once
// To use multiple component, import component from App component
ReactDOM.render(<App />, document.getElementById("root"));
