import Body_main from "./styled/lectureBodyStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import Iframe from "react-iframe";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import Lecture from "./../../pages/lecture";

function MainBody() {
  const [isCheck, setIsCheck] = useState(false);
  const { idx } = useParams();
  const [lecture, setLecture] = useState({
    title: "",
    provider: "",
    level: "",
    score: 0,
    thumbnailUrl: "",
    url: "",
  });
  const navigate = useNavigate();

  const getList = async () => {
    const url = "http://27.119.53.12:4000/graphql";
    try {
      const response = await axios.post(
        url,
        {
          query: `
              query GetLikedLectureOutputDto{
                  getLikedLecture{
                      ok
                      message
                      likedLectures{ 
                          id
                         
                      }
                  }
              }`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
          },
        }
      );
      const ha = response.data.data.getLikedLecture.likedLectures;

      for (let i = 0; i < ha.length; i++) {
        if (ha[i].id === Number(idx)) {
          //console.log("adf");
          setIsCheck(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getLecture = async () => {
    try {
      const response = await axios.post(
        "http://27.119.53.12:4000/graphql",
        {
          query: `
            query GetLectureOutputDto {
                getLecture(getLectureInput: {lectureId: ${idx}}) {
                    lecture {
                        id
                        provider
                        title
                        author
                        skills
                        lectureUpdatedAt
                        level
                        currentPrice
                        duration
                        score
                        description
                        thumbnailUrl
                        url
                    }
                }
            }`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //console.log(response.data);
      setLecture(response.data.data.getLecture.lecture);
    } catch (error) {
      console.error(error);
    }
  };

  const changeHeart = async () => {
    const url = "http://27.119.53.12:4000/graphql";
    try {
      const response = await axios.post(
        url,
        {
          query: `
        mutation CreateLikeLectureOutputDto {
            likeLecture(CreateLikeLectureInput: {lectureId: ${idx}}) {
                ok
                message
                likeStatus
            }
        }`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
          },
        }
      );
      //console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLecture();
    getList();
  }, []);

  console.log(lecture);

  return (
    <>
      <Body_main score={lecture.score}>
        <div className="info">
          <div id="tumbnailBox">
            <img
              id="tumbnail"
              src={
                lecture.thumbnailUrl === ""
                  ? "   https://cdn.inflearn.com/public/courses/331392/cover/6caf16d0-df2b-40c0-b091-ad7b7b3b9045/331392-eng.png"
                  : lecture.thumbnailUrl
              }
              alt=""
            />
            <FontAwesomeIcon
              onClick={() => {
                //빈거임
                changeHeart();
                setIsCheck(true);
              }}
              icon={heartRegular}
              className={`Like ${isCheck ? "hidden" : ""} `}
            />
            <FontAwesomeIcon
              onClick={() => {
                //찬거임
                changeHeart();
                setIsCheck(false);
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
            >{`카테고리 > 개발> 웹개발 `}</li>
            <li
              style={{
                fontSize: "1.9rem",
                fontWeight: "600",
              }}
            >
              {lecture.title}
            </li>
            <li
              style={{
                fontSize: "1.3rem",
              }}
            >
              강의 사이트:{" "}
              <span style={{ margin: "0 0 0 0.5rem" }}>
                {`${lecture.provider}`}
              </span>
            </li>
            <li
              style={{
                fontSize: "1.3rem",
              }}
            >
              난이도:{" "}
              <span style={{ margin: "0 0 0 0.5rem" }}>{lecture.level}</span>
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
            url={lecture.url}
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
