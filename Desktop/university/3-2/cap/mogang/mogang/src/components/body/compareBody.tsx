import Body_main from "./styled/compareBodyStyle";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";
import { faCirclePlus, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";

function MainBody() {
  const { index } = useParams();
  const [checkDeleteOption, setCheckDeleteOption] = useState(false);
  const list = ["권경민", "ㄼㅈ", "ㅁㅇㄴㄹ"];

  const DeleteConfirmMessage = () => {
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

    function handleChange(e: any) {
      console.log(e.target.value);
    }

    return (
      <Modal
        isOpen={checkDeleteOption}
        onRequestClose={() => setCheckDeleteOption(false)}
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
                setCheckDeleteOption(false);
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
            {list.map((value, i) => {
              return (
                <div
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
                    id={value}
                    value={value}
                    name="platform"
                    type="radio"
                    onChange={handleChange}
                  />
                  <span>{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
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
          <div className="card">
            <div className="thumbnail">
              <FontAwesomeIcon icon={faXmark} className="X" />
            </div>
            <div className="extra">
              <div className="explain1">
                <div>
                  <span>강의명: </span>
                  <span>9시간만에 끝내는 코드입니다...</span>
                </div>
                <span className="level">입문</span>
              </div>
              <div className="explain1">
                <div>
                  <span>키워드: </span>
                  <span>javaScript</span>
                </div>
              </div>
              <div className="explain1">
                <div>
                  <span>가격: </span>
                  <span>무료</span>
                </div>
              </div>
              <div className="explain2">
                <div>요구사항</div>
                <span>- javacript 관련 지식은 필요하지 않습니다.</span>
                <span>- 기본 웹 개발 지식이 있으면 도움이 됩니다.</span>
              </div>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon
              onClick={() => {
                setCheckDeleteOption(true);
              }}
              icon={faCirclePlus}
              className="plus"
            />
          </div>
        </div>

        <DeleteConfirmMessage />
      </Body_main>
    </>
  );
}
export default MainBody;
