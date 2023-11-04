import React from "react";
import Lecture_Card from "./lectureCardstyle";

function LectureList() {
  return (
    <>
      <Lecture_Card>
        <div id="sumbnail"></div>
        <div className="tag">
          <div>입문/초급</div>
          <div>코딩</div>
          <div>HTML</div>
        </div>
        <div id="title">HTML CSS 초보자를 위한 강의</div>
        <div id="offer">인프런</div>
      </Lecture_Card>
      <Lecture_Card>
        <div id="sumbnail"></div>
        <div className="tag">
          <div>입문/초급</div>
          <div>코딩</div>
          <div>HTML</div>
        </div>
        <div id="title">HTML CSS 초보자를 위한 강의</div>
        <div id="offer">인프런</div>
      </Lecture_Card>
      <Lecture_Card>
        <div id="sumbnail"></div>
        <div className="tag">
          <div>입문/초급</div>
          <div>코딩</div>
          <div>HTML</div>
        </div>
        <div id="title">HTML CSS 초보자를 위한 강의</div>
        <div id="offer">인프런</div>
      </Lecture_Card>
    </>
  );
}

export default LectureList;
