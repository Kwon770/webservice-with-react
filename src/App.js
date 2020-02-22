import React from "react";
import axios from "axois";

class App extends React.Component {
  state = {
    isLoading: true,
    movies = []
  };

  // 비동기 함수 예약어 async > async funcion() / async ()
  // 비동기 동작 대상 await
  // 비동기 수행을 위한 예약어 await. await를 사용하기 위해선 함수 앞에 async 선언
  GetMovies = async () => {
    // Get json by api with axios
    const moveis = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount() {
    this.GetMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading.." : "We are ready"}</div>;
  }
}

export default App;
