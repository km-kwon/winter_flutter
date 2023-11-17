import React from "react";
import Lecture_Card from "./lectureCardstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function LectureList() {
  function Card() {
    const [isCheck, setIsCheck] = useState(false);
    return (
      <Lecture_Card>
        <div id="sumbnail">
          <FontAwesomeIcon
            onClick={() => {
              setIsCheck(!isCheck);
            }}
            icon={heartRegular}
            className={`Like ${isCheck ? "hidden" : ""} `}
          />
          <FontAwesomeIcon
            onClick={() => {
              setIsCheck(!isCheck);
            }}
            icon={heartSolid}
            className={`Like ${isCheck ? "" : "hidden"} `}
          />
        </div>
        <div className="tag">
          <div>입문/초급</div>
          <div>코딩</div>
          <div>HTML</div>
        </div>
        <div
          style={{
            padding: "0 0 0 0.1rem",
          }}
        >
          <div id="title">HTML CSS 초보자를 위한 강의</div>
          <div id="offer">
            <span>인프런</span>
            <div className="parent">
              <div className="child">
                <img
                  id="star"
                  src={`${process.env.PUBLIC_URL}/img/파란별.png`}
                  alt="모강"
                />
              </div>
              <img
                id="backStar"
                src={`${process.env.PUBLIC_URL}/img/회색별.png`}
                alt="모강"
              />
            </div>
            <span style={{ fontSize: "0.8rem" }}>asdfs</span>
          </div>
          <div id="price">무료</div>
        </div>
      </Lecture_Card>
    );
  }

  return (
    <>
      <Card />

      <Card />

      <Card />
    </>
  );
}

export default LectureList;
