import React from "react";
import PropTypes from "prop-types";

// extends : 상속
// React는 전달받는 class component의 render를 실행함
class App extends React.Component {
  state = {
    count: 0
  };

  // setState(): Change date and Refresh certain tag with render()
  // 'current' make this can apporach state
  // this.state.DATA is bad format
  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  };
  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  };

  // To get data of class component, Use 'this'
  // To deliever object, Don't write '()'
  render() {
    return (
      <div>
        <h1>The number is {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
