/* eslint-disable */
import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let blogTitle = "Blog";

  // 글 제목들을 저장하는 state 생성
  let [postTitles, setPostTitles] = useState(["사과", "바나나", "포도"]);

  // 글 제목을 저장하는 state 생성
  let [postTitle, setPostTitle] = useState("");

  // 글 번호를 저장하는 state 생성
  let [postNumber, setPostNumber] = useState(0);

  // 좋아요 개수를 저장하는 state 생성
  let [likeCounts, setLikeCounts] = useState([0, 0, 0]);

  // 모달을 열고 닫는 state 생성
  let [isModalOpen, setIsModalOpen] = useState(false);

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

  // 좋아요 개수를 증가시키는 함수
  const incrementLikes = (i) => {
    let updatedLikeCounts = [...likeCounts];
    updatedLikeCounts[i] += 1;
    setLikeCounts(updatedLikeCounts);
  };

  // 기존의 글 목록 끝에 새로운 글을 추가하는 함수
  const appendPost = () => {
    let updatedTitles = [...postTitles];
    updatedTitles.push(postTitle);
    setPostTitles(updatedTitles);

    let updatedLikeCounts = [...likeCounts];
    updatedLikeCounts.push(0);
    setLikeCounts(updatedLikeCounts);
  };

  // 글을 삭제하는 함수
  const deletePost = (i) => {
    let updatedTitles = [...postTitles];
    updatedTitles.splice(i, 1);
    setPostTitles(updatedTitles);

    let updatedLikeCounts = [...likeCounts];
    updatedLikeCounts.splice(i, 1);
    setLikeCounts(updatedLikeCounts);
  };

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
            <h4
              onClick={() => {
                setIsModalOpen(true);
                setPostNumber(index);
              }}
            >
              {postTitle}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  incrementLikes(index);
                }}
              >
                👍
              </span>
              {likeCounts[index]}&nbsp;
              <button onClick={() => deletePost(index)}>글 삭제</button>
            </h4>
            <p>2024-10-31</p>
          </div>
        );
      })}
      <hr></hr>
      <input
        onChange={(e) => {
          setPostTitle(e.target.value);
        }}
      ></input>
      &nbsp;
      <button onClick={appendPost}>글 추가</button>
      {isModalOpen ? (
        <Modal
          postTitles={postTitles}
          postNumber={postNumber}
          color="skyblue"
          strawberry={changeToStrawberry}
        />
      ) : null}
      <hr></hr>
      <Modal2></Modal2>
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

// Class형 컴포넌트
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Lee",
      age: 31,
    };
  }
  render() {
    return (
      <div>
        {this.props.name || this.state.name}. Your age is {this.state.age}
        .&nbsp;
        <button
          onClick={() => {
            this.setState({ age: 32 });
          }}
        >
          나이 변경
        </button>
      </div>
    );
  }
}

export default App;
