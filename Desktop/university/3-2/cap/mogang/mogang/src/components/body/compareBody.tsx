import Body_main from "./styled/compareBodyStyle";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate } from "react-router";
import { faCirclePlus, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function MainBody() {
  const { index } = useParams();
  const [checkDeleteOption1, setCheckDeleteOption1] = useState(false);
  const [checkDeleteOption2, setCheckDeleteOption2] = useState(false);

  const navigate = useNavigate();
  const [item1, setItem1] = useState({
    title: "",
    skills: [],
    currentPrice: 0,
    thumbnailUrl: "",
  });
  const [item2, setItem2] = useState({
    title: "",
    skills: [],
    currentPrice: 0,
    thumbnailUrl: "",
  });
  const [likeLectures, setlikeLectures] = useState([]);

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
            Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
          },
        }
      );
      setlikeLectures(response.data.data.getLikedLecture.likedLectures);
      if (response.data.data.getLikedLecture.likedLectures.length === 0) {
        alert("찜한 강의가 없습니다!");
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const DeleteConfirmMessage1 = () => {
    let idx1 = 0;

    const customModalStyles2: ReactModal.Styles = {
      overlay: {
        backgroundColor: " rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
      },
      content: {
        width: "20rem",
        height: "30rem",
        zIndex: "150",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        justifyContent: "center",
        overflow: "auto",
      },
    };
    const getLecture = async (idx: number) => {
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
        setItem1(response.data.data.getLecture.lecture);
        console.log(response.data.data.getLecture.lecture);
      } catch (error) {
        console.error(error);
      }
    };
    async function handleChange(e: any) {
      console.log(e.target.value);
      idx1 = Number(e.target.value);
    }

    return (
      likeLectures[0] && (
        <Modal
          isOpen={checkDeleteOption1}
          onRequestClose={() => setCheckDeleteOption1(false)}
          ariaHideApp={false}
          style={customModalStyles2}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "1.3rem",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "90%",
                alignItems: "center",
                margin: "2rem 0 2rem 0",
              }}
            >
              <div>
                <FontAwesomeIcon
                  style={{
                    color: "#f97171",
                    margin: "0 1rem 0 0",
                  }}
                  className="icon"
                  icon={heartSolid}
                />
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  내가 찜한 강의 목록
                </span>
              </div>
              <FontAwesomeIcon
                style={{
                  marginLeft: "auto",
                }}
                icon={faXmark}
                className="X"
                onClick={() => {
                  setCheckDeleteOption1(false);
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {likeLectures.map((value: { title: string; id: number }, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.2rem",
                      margin: "0 1rem 1rem 1rem",
                    }}
                  >
                    <input
                      style={{
                        height: "1.5rem",
                        width: "2rem",
                        accentColor: "skyblue",
                        margin: "0 1rem 0 0",
                      }}
                      id={value.title}
                      value={value.id}
                      name="platform"
                      type="radio"
                      onChange={handleChange}
                    />
                    <span
                      style={{
                        width: "20rem",
                      }}
                    >
                      {value.title}
                    </span>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                margin: "auto 0 1rem 0",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                onClick={async () => {
                  navigate(`/lecture/${Number(idx1)}`);
                }}
                style={{
                  backgroundColor: "#3499fd",
                  color: "white",
                  padding: "0.5rem",
                  borderRadius: "10px",
                  margin: "0 0 0 1rem",
                }}
              >
                이동하기
              </span>
              <span
                onClick={async () => {
                  setCheckDeleteOption1(false);
                  await getLecture(Number(idx1));
                }}
                style={{
                  backgroundColor: "#3499fd",
                  color: "white",
                  padding: "0.5rem",
                  borderRadius: "10px",
                }}
              >
                확인
              </span>
            </div>
          </div>
        </Modal>
      )
    );
  };

  const DeleteConfirmMessage2 = () => {
    let idx2 = 0;
    const customModalStyles2: ReactModal.Styles = {
      overlay: {
        backgroundColor: " rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
      },
      content: {
        width: "20rem",
        height: "30rem",
        zIndex: "150",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        justifyContent: "center",
        overflow: "auto",
      },
    };
    const getLecture = async (idx: number) => {
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
        console.log(response.data.data.getLecture.lecture);
        setItem2(response.data.data.getLecture.lecture);
      } catch (error) {
        console.error(error);
      }
    };
    async function handleChange(e: any) {
      console.log(e.target.value);
      idx2 = Number(e.target.value);
    }

    return (
      likeLectures[0] && (
        <Modal
          isOpen={checkDeleteOption2}
          onRequestClose={() => setCheckDeleteOption2(false)}
          ariaHideApp={false}
          style={customModalStyles2}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "1.3rem",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "90%",
                alignItems: "center",
                margin: "2rem 0 2rem 0",
              }}
            >
              <div>
                <FontAwesomeIcon
                  style={{
                    color: "#f97171",
                    margin: "0 1rem 0 0",
                  }}
                  className="icon"
                  icon={heartSolid}
                />
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  내가 찜한 강의 목록
                </span>
              </div>
              <FontAwesomeIcon
                style={{
                  marginLeft: "auto",
                }}
                icon={faXmark}
                className="X"
                onClick={() => {
                  setCheckDeleteOption2(false);
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {likeLectures.map((value: { title: string; id: number }, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.2rem",
                      margin: "0 1rem 1rem 1rem",
                    }}
                  >
                    <input
                      style={{
                        height: "1.5rem",
                        width: "2rem",
                        accentColor: "skyblue",
                        margin: "0 1rem 0 0",
                      }}
                      id={value.title}
                      value={value.id}
                      name="platform"
                      type="radio"
                      onChange={handleChange}
                    />
                    <span
                      style={{
                        width: "20rem",
                      }}
                    >
                      {value.title}
                    </span>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                margin: "auto 0 1rem 0",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  backgroundColor: "#3499fd",
                  color: "white",
                  padding: "0.5rem",
                  borderRadius: "10px",
                  margin: "0 0 0 1rem",
                }}
              >
                이동하기
              </span>
              <span
                onClick={async () => {
                  setCheckDeleteOption2(false);
                  await getLecture(Number(idx2));
                }}
                style={{
                  backgroundColor: "#3499fd",
                  color: "white",
                  padding: "0.5rem",
                  borderRadius: "10px",
                }}
              >
                확인
              </span>
            </div>
          </div>
        </Modal>
      )
    );
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
              강의 알아보기
            </span>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              내가 선택한 강의와 비슷한 강의를 추천받아요!
            </span>
          </div>
        </div>
        <span className="subtitle">강의 비교하기</span>

        <div className="carsContainer">
          <div className={item1.title === "" ? "hidden" : "card"}>
            <div id="tumbnailBox">
              <img
                id="tumbnail"
                src={
                  item1.thumbnailUrl === ""
                    ? "   https://cdn.inflearn.com/public/courses/331392/cover/6caf16d0-df2b-40c0-b091-ad7b7b3b9045/331392-eng.png"
                    : item1.thumbnailUrl
                }
                alt=""
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="X"
                onClick={() => {
                  setItem1({
                    title: "",
                    skills: [],
                    currentPrice: 0,
                    thumbnailUrl: "",
                  });
                }}
              />
            </div>
            <div className="extra">
              <div className="explain1">
                <div>
                  <span>강의명: </span>
                  <span>{item1.title}</span>
                </div>
                <span className=""></span>
              </div>
              <div className="explain1">
                <div>
                  <span>키워드: </span>
                  <span>
                    {item1.skills.map((item, idx) => {
                      if (idx < 2) {
                        return (
                          <span style={{ margin: "0 0.5rem 0 0" }}>{item}</span>
                        );
                      }
                    })}
                  </span>
                </div>
              </div>
              <div className="explain1">
                <div>
                  <span>가격: </span>
                  <span>
                    {" "}
                    {item1.currentPrice !== 0
                      ? "₩ " + item1.currentPrice
                      : "무료"}
                  </span>
                </div>
              </div>
              <div className="explain2">
                <div>요구사항</div>
                <span>- 사전 JavaScript관련 지식은 필요하지 않습니다.</span>
                <span>- 기본 웹 개발 지식이 있으면 도움이 됩니다.</span>
              </div>
            </div>
          </div>
          <div className={item1.title === "" ? "card" : "hidden"}>
            <FontAwesomeIcon
              onClick={() => {
                setCheckDeleteOption1(true);
              }}
              icon={faCirclePlus}
              className="plus"
            />
          </div>

          <div className={item2.title === "" ? "hidden" : "card"}>
            <div id="tumbnailBox">
              <img
                id="tumbnail"
                src={
                  item2.thumbnailUrl === ""
                    ? "   https://cdn.inflearn.com/public/courses/331392/cover/6caf16d0-df2b-40c0-b091-ad7b7b3b9045/331392-eng.png"
                    : item2.thumbnailUrl
                }
                alt=""
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="X"
                onClick={() => {
                  setItem2({
                    title: "",
                    skills: [],
                    currentPrice: 0,
                    thumbnailUrl: "",
                  });
                }}
              />
            </div>
            <div className="extra">
              <div className="explain1">
                <div>
                  <span>강의명: </span>
                  <span>{item2.title}</span>
                </div>
                <span className=""> </span>
              </div>
              <div className="explain1">
                <div>
                  <span>키워드: </span>
                  <span>
                    {item2.skills.map((item, idx) => {
                      if (idx < 2) {
                        return (
                          <span style={{ margin: "0 0.5rem 0 0" }}>{item}</span>
                        );
                      }
                    })}
                  </span>
                </div>
              </div>
              <div className="explain1">
                <div>
                  <span>가격: </span>
                  <span>
                    {" "}
                    {item2.currentPrice !== 0
                      ? "₩ " + item2.currentPrice
                      : "무료"}
                  </span>
                </div>
              </div>
              <div className="explain2">
                <div>요구사항</div>
                <span>- 사전 JavaScript관련 지식은 필요하지 않습니다.</span>
                <span>- 기본 웹 개발 지식이 있으면 도움이 됩니다.</span>
              </div>
            </div>
          </div>
          <div className={item2.title === "" ? "card" : "hidden"}>
            <FontAwesomeIcon
              onClick={() => {
                setCheckDeleteOption2(true);
              }}
              icon={faCirclePlus}
              className="plus"
            />
          </div>
        </div>

        <DeleteConfirmMessage1 />
        <DeleteConfirmMessage2 />
      </Body_main>
    </>
  );
}
export default MainBody;
