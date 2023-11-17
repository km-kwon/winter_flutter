import Body_main from "./styled/compareBodyStyle";
import LectureList from "./lecture/lectureCard";
import { useState } from "react";
import {
  faV,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";

function MainBody() {
  const { index } = useParams();
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [isSecondOpen, setIsSecondOpen] = useState(true);
  const [categoryName, setCategoryName] = useState("카테고리");
  const [detailCategoryName, setDetailCategoryName] = useState("세부 카테고리");
  const [option, setOption] = useState(-1);
  const [free, setFree] = useState(true);

  const toggleMenu1 = () => {
    setIsFirstOpen(!isFirstOpen);
  };

  const toggleMenu2 = () => {
    if (categoryName === "카테고리") {
    } else {
      setIsSecondOpen(!isSecondOpen);
    }
  };
  return (
    <>
      <Body_main>
        <div className="title">
          <div className="titleBox">
            <span
              style={{
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              강의 리스트
            </span>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              한번의 모든 강의를 살펴봐요!
            </span>
          </div>
        </div>
        <div className="Row">
          <div className="listDetail">
            <div className="menu" onClick={toggleMenu1}>
              <span>{categoryName}</span>
              <FontAwesomeIcon icon={faV} />
            </div>
            <div className={` ${isFirstOpen ? "hidden" : "toggleMenu1"}`}>
              <div
                className={`${isFirstOpen ? "hidden" : "toggleMenuContainer"}`}
                onClick={() => {
                  setCategoryName("개발");
                  setIsFirstOpen(!isFirstOpen);
                }}
              >
                개발
              </div>
              <div
                className={`${isFirstOpen ? "hidden" : "toggleMenuContainer"}`}
              >
                데이터 사이언스(준비 중)
              </div>
            </div>
          </div>
          <div className="listDetail">
            <div className="menu" onClick={toggleMenu2}>
              <span>{detailCategoryName}</span>
              <FontAwesomeIcon icon={faV} />
            </div>
            <div className={` ${isSecondOpen ? "hidden" : "toggleMenu2"}`}>
              <div
                className={`${isSecondOpen ? "hidden" : "toggleMenuContainer"}`}
                onClick={() => {
                  setIsSecondOpen(!isSecondOpen);
                  setDetailCategoryName("JavaScript");
                }}
              >
                JavaScript
              </div>
              <div
                className={`${isSecondOpen ? "hidden" : "toggleMenuContainer"}`}
                onClick={() => {
                  setIsSecondOpen(!isSecondOpen);
                  setDetailCategoryName("ReactJS");
                }}
              >
                ReactJS
              </div>
              <div
                className={`${isSecondOpen ? "hidden" : "toggleMenuContainer"}`}
                onClick={() => {
                  setIsSecondOpen(!isSecondOpen);
                  setDetailCategoryName(" Html/CSS");
                }}
              >
                Html/CSS
              </div>
            </div>
          </div>

          <div className="detail">
            <div
              className={`${
                option === 1 ? "detailCategory2" : "detailCategory1"
              }`}
              onClick={() => {
                if (option !== 1) {
                  setOption(1);
                } else if (option === 1) {
                  setOption(-1);
                }
              }}
            >
              입문
            </div>
            <div
              className={`${
                option === 2 ? "detailCategory2" : "detailCategory1"
              }`}
              onClick={() => {
                if (option !== 2) {
                  setOption(2);
                } else if (option === 2) {
                  setOption(-1);
                }
              }}
            >
              초급
            </div>
            <div
              className={`${
                option === 3 ? "detailCategory2" : "detailCategory1"
              }`}
              onClick={() => {
                if (option !== 3) {
                  setOption(3);
                } else if (option === 3) {
                  setOption(-1);
                }
              }}
            >
              중급+
            </div>
          </div>
          <div
            className={`${free ? "temp1" : "temp2"}`}
            onClick={() => {
              setFree(!free);
            }}
          >
            무료 강의만
          </div>
        </div>
        <div className="list">
          <LectureList />
        </div>
        <div className="pageInfo">
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{
              fontSize: "1.5rem",
              margin: "0 1rem 0 0",
            }}
          />
          1 ~<div className="curPage">{index}</div> ~ 30
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{
              fontSize: "1.5rem",
              margin: "0 0 0 1rem",
            }}
          />
        </div>
      </Body_main>
    </>
  );
}
export default MainBody;
