/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  let blogTitle = "My Blog";
  let [postTitle, setPostTitle] = useState(["사과", "바나나", "포도"]);
  // 좋아요 개수를 저장하는 state 생성
  const [likeCount, setLikeCount] = useState(0);

  // 좋아요 개수를 증가시키는 함수
  const incrementLikes = () => {
    setLikeCount(likeCount + 1);
  };

  const changeToStrawberry = () => {
    setPostTitle(["딸기", "바나나", "포도"]);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "blue", fontSize: "30px" }}>{blogTitle}</h4>
      </div>
      <div className="list">
        <span onClick={changeToStrawberry}>🍓</span>
        <h4>
          {postTitle[0]} <span onClick={incrementLikes}>👍</span>
          {likeCount}
        </h4>
        <p>2024-10-31</p>
      </div>
      <div className="list">
        <h4>{postTitle[1]}</h4>
        <p>2024-10-31</p>
      </div>
      <div className="list">
        <h4>{postTitle[2]}</h4>
        <p>2024-10-31</p>
      </div>
    </div>
  );
}

export default App;
