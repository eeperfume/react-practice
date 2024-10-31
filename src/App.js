/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  let blogTitle = "Blog";
  let [postTitles, setPostTitles] = useState(["사과", "바나나", "포도"]);

  // 첫 번째 글 제목을 딸기로 변경시키는 함수
  const changeToStrawberry = () => {
    let updatedTitles = [...postTitles];
    updatedTitles[0] = "딸기";
    setPostTitles(updatedTitles);
  };

  // 가나다순으로 내림차순 정렬하는 함수
  const sortTitlesByKoreanOrder = () => {
    let updatedTitles = [...postTitles];
    updatedTitles.sort((a, b) => a.localeCompare(b, "ko"));
    setPostTitles(updatedTitles);
  };

  // 좋아요 개수를 저장하는 state 생성
  const [likeCounts, setLikeCounts] = useState([0, 0, 0]);

  // 좋아요 개수를 증가시키는 함수
  const incrementLikes = (i) => {
    let updatedLikeCounts = [...likeCounts];
    updatedLikeCounts[i] += 1;
    setLikeCounts(updatedLikeCounts);
  };

  // 모달을 열고 닫는 state 생성
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 글 번호를 저장하는 state 생성
  let [postNumber, setPostNumber] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "30px" }}>{blogTitle}</h4>
      </div>
      <button onClick={changeToStrawberry}>사과를 딸기로 변경</button>
      <button onClick={sortTitlesByKoreanOrder}>가나다순 정렬</button>
      <button
        onClick={() => {
          // isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
          setIsModalOpen(!isModalOpen);
        }}
      >
        모달 제어
      </button>
      {postTitles.map((postTitle, index) => {
        return (
          <div className="list" key={index}>
            <h4>
              {postTitle} <span onClick={() => incrementLikes(index)}>👍</span>
              {likeCounts[index]}&nbsp;
              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setPostNumber(index);
                }}
              >
                모달 제어
              </button>
            </h4>
            <p>2024-10-31</p>
          </div>
        );
      })}
      {isModalOpen ? (
        <Modal
          postTitles={postTitles}
          postNumber={postNumber}
          color="skyblue"
          strawberry={changeToStrawberry}
        />
      ) : null}
    </div>
  );
}

const Modal = ({ postTitles, postNumber, color, strawberry }) => {
  return (
    <div className="modal" style={{ backgroundColor: color }}>
      <h4>{postTitles[postNumber]}</h4>
      <button onClick={strawberry}>첫 번째 글 제목을 딸기로 변경</button>
    </div>
  );
};

export default App;
