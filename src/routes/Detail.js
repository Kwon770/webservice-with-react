import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    // location, history, .. etc props은 Route 으로부터 주어짐
    const { location, history } = this.props;
    // 클릭에 의한 것이 아닌 임의적으로 주소를 통해 들어온 경우 전달받은 props이 없음
    // 이 경우 Component 가 정상작동 하지 않으므로, 홈으로 Redirectinfg
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    // render() 가 componentDidMount() 보다 빠르므로 예외 방지
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
