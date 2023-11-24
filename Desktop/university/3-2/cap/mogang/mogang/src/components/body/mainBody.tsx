import Body_main from "./styled/mainBodyStyle";
import LectureList from "./lecture/lectureCard";
import { useState } from "react";
import { useNavigate } from "react-router";
import List from "./../../pages/list";

function MainBody() {
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [isSecondOpen, setIsSecondOpen] = useState(true);
  const [categoryName, setCategoryName] = useState("카테고리");
  const [detailCategoryName, setDetailCategoryName] = useState("세부 카테고리");
  const [option, setOption] = useState(-1);
  const [free, setFree] = useState(true);
  const navigate = useNavigate();

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
      <div>
        <img
          className="mainImg"
          style={{ width: "100%" }}
          src="img/main.png"
          alt="모강"
        />
      </div>
      <Body_main>
        <div className="recommandBar">
          <img id="recommand" src="img/search.png" alt="모강" />
          <div>강의 조회하기</div>
        </div>
        <div className="recommandOption">
          <div className="option">
            <div className="Row">
              <div className="listDetail">
                <div>{categoryName}</div>
                <div onClick={toggleMenu1}>클릭</div>
                <div className={` ${isFirstOpen ? "hidden" : "toggleMenu1"}`}>
                  <div
                    className={`${
                      isFirstOpen ? "hidden" : "toggleMenuContainer"
                    }`}
                    onClick={() => {
                      setCategoryName("개발");
                      setIsFirstOpen(!isFirstOpen);
                    }}
                  >
                    개발
                  </div>
                  <div
                    className={`${
                      isFirstOpen ? "hidden" : "toggleMenuContainer"
                    }`}
                  >
                    데이터 사이언스(준비 중)
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
            </div>
            <div className="Row">
              <div className="listDetail">
                <div>{detailCategoryName}</div>
                <div onClick={toggleMenu2}>클릭</div>
                <div className={` ${isSecondOpen ? "hidden" : "toggleMenu2"}`}>
                  <div
                    className={`${
                      isSecondOpen ? "hidden" : "toggleMenuContainer"
                    }`}
                    onClick={() => {
                      setIsSecondOpen(!isSecondOpen);
                      setDetailCategoryName("JavaScript");
                    }}
                  >
                    JavaScript
                  </div>
                  <div
                    className={`${
                      isSecondOpen ? "hidden" : "toggleMenuContainer"
                    }`}
                    onClick={() => {
                      setIsSecondOpen(!isSecondOpen);
                      setDetailCategoryName("ReactJS");
                    }}
                  >
                    ReactJS
                  </div>
                  <div
                    className={`${
                      isSecondOpen ? "hidden" : "toggleMenuContainer"
                    }`}
                    onClick={() => {
                      setIsSecondOpen(!isSecondOpen);
                      setDetailCategoryName(" Html/CSS");
                    }}
                  >
                    Html/CSS
                  </div>
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
          </div>
          <div
            id="searchBtn"
            onClick={() => {
              console.log(option, free);

              navigate("/list/1", {
                state: {
                  categoryName: categoryName,
                  detailCategoryName: detailCategoryName,
                  option: option,
                  free: free,
                },
              });
            }}
          >
            조회
          </div>
        </div>
      </Body_main>
    </>
  );
}
export default MainBody;
