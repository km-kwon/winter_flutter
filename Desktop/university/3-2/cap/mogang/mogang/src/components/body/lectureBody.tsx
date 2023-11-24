import Body_main from "./styled/lectureBodyStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Iframe from "react-iframe";

function MainBody() {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <>
      <Body_main>
        <div className="info">
          <div id="tumbnail">
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
          <div className="detail">
            <li
              style={{
                fontSize: "1.2rem",
              }}
            >{`카테고리 > 개발> 웹개발 > JavaScript`}</li>{" "}
            <li
              style={{
                fontSize: "1.9rem",
                fontWeight: "600",
              }}
            >
              9시간 만에 끝내는 코드팩토리의 JAvascript 무료 풀코스
            </li>
            <li
              style={{
                fontSize: "1.3rem",
              }}
            >
              강의 사이트 : <span>인프런</span>
            </li>
            <li
              style={{
                fontSize: "1.3rem",
              }}
            >
              난이도 : <span>입문</span>
            </li>
            <li
              style={{
                fontSize: "1.3rem",
              }}
            >
              평점 :
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
            </li>
          </div>
        </div>
        <div className="frameContainer">
          <Iframe
            url="https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-db-1"
            width="102%"
            height="5000px"
            className=""
            display="block"
            position="relative"
            styles={{
              top: "-590px",
              left: "-2px",
            }}
          />
        </div>
      </Body_main>
    </>
  );
}
export default MainBody;
