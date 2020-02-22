import React from "react";
import PropTypes from "prop-types";

// extends : 상속
// React는 전달받는 class component의 render를 실행함
class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {};
  minus = () => {};

  // To get data of class component, Use 'this'
  render() {
    return (
      <div>
        <h1>The number is {this.state.count} </h1>
        <button onClick={this.add()}>Add</button>
        <button onClick={this.minus()}>Minus</button>
      </div>
    );
  }
}

export default App;
