import Body_main from "./styled/listBodyStyle";
import LectureList from "./lecture/lectureCard";
import { useEffect, useState } from "react";
import {
  faV,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

interface props {
  option1: number;
  free: boolean;
  categoryName1: string;
  detailCategoryName1: string;
}

function MainBody({
  option1,
  free,
  categoryName1,
  detailCategoryName1,
}: props) {
  const { index } = useParams();
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [isSecondOpen, setIsSecondOpen] = useState(true);
  const [categoryName, setCategoryName] = useState(categoryName1);
  const [detailCategoryName, setDetailCategoryName] =
    useState(detailCategoryName1);
  const [option, setOption] = useState(option1);
  const [free1, setfree1] = useState(free);
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const getList = async () => {
    try {
      const response = await axios.post(
        "http://27.119.53.12:4000/graphql",
        {
          query: `
            query GetLectureListOutputDto {
                getLectureList(getLectureListInput: {
                    skills: ["JavaScript"], page: ${index}, order:""
                }) {
                    ok
                    message
                    totalPage
                    lectures {
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
      console.log(response.data.data);
      setTotalPage(response.data.data.getLectureList.totalPage);
      setItems(response.data.data.getLectureList.lectures);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

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
    items && (
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
            className={`${free1 ? "temp1" : "temp2"}`}
            onClick={() => {
              setfree1(!free1);
            }}
          >
            무료 강의만
          </div>
        </div>
        <div className="list">
          <LectureList item3={items.slice(0, 3)} />
        </div>
        <div className="list">
          <LectureList item3={items.slice(3, 6)} />
        </div>
        <div className="list">
          <LectureList item3={items.slice(6, 9)} />
        </div>
        <div className="pageInfo">
          <FontAwesomeIcon
            className={`${Number(index) === 1 ? "hidden" : ""}`}
            onClick={() => {
              setTimeout(() => {
                window.location.reload();
              }, 100);
              navigate(`/list/${Number(index) - 1}`, {
                state: {
                  categoryName: categoryName,
                  detailCategoryName: detailCategoryName,
                  option: option,
                  free: free1,
                },
              });
            }}
            icon={faChevronLeft}
            style={{
              fontSize: "1.5rem",
              margin: "0 1rem 0 0",
            }}
          />
          <div>{Number(index) === 1 ? "" : "1 ~"}</div>
          <div className="curPage">{index}</div>
          <div>{Number(index) === totalPage ? "" : `~ ${totalPage}`}</div>
          <FontAwesomeIcon
            onClick={() => {
              setTimeout(() => {
                window.location.reload();
              }, 100);
              navigate(`/list/${Number(index) + 1}`, {
                state: {
                  categoryName: categoryName,
                  detailCategoryName: detailCategoryName,
                  option: option,
                  free: free1,
                },
              });
            }}
            className={`${Number(index) === totalPage ? "hidden" : ""}`}
            icon={faChevronRight}
            style={{
              fontSize: "1.5rem",
              margin: "0 0 0 1rem",
            }}
          />
        </div>
      </Body_main>
    )
  );
}
export default MainBody;
