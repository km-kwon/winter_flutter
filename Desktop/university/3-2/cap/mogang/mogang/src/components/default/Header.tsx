import {
  HeaderMain,
  DropdownEdit,
  DropdowonItemEdit,
  DropdownSubEdit,
} from "./styled/headerStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import Dropdown from "react-multilevel-dropdown";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

function Header() {
  const [isExtraOption, setIsExtraOption] = useState(false);
  const navigate = useNavigate();

  const PopupMessage = () => {
    const customModalStyles: ReactModal.Styles = {
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
        width: "40%",
        height: "50%",
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

    const Input = styled.input`
      height: 100%;
      width: 100%;
      padding: 0 1rem;
      font-size: 1.4rem;
      border: solid 2px #b1b1b1;
      border-radius: 15px;
      ::placeholder {
        color: red;
      }
    `;

    const login = () => {};

    return (
      <Modal
        isOpen={isExtraOption}
        onRequestClose={() => setIsExtraOption(false)}
        ariaHideApp={false}
        style={customModalStyles}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <li>
            <img
              style={{
                margin: "2rem",
              }}
              className="textImg"
              src="img/mogangtext.png"
              alt="모강"
            />
          </li>
          <li style={{ width: "75%" }}>
            <div
              style={{
                width: "100%",
                height: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Input type="text" placeholder="이메일" />
            </div>
            <div
              style={{
                width: "100%",
                height: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "1.5rem",
              }}
            >
              <Input type="password" placeholder="비밀번호" />
            </div>
            <div
              style={{
                marginTop: "2.5rem",
                width: "100%",
                height: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                  padding: "0 1rem",
                  fontSize: "1.4rem",
                  border: "solid 2px #b1b1b1",
                  borderRadius: "15px",
                  backgroundColor: "#3499fd",
                  color: "white",
                }}
                onClick={login}
              >
                로그인
              </span>
            </div>
          </li>
          <li
            style={{
              marginTop: "3.5rem",
              color: "#898989",
              fontWeight: "500",
              fontSize: "1.1rem",
            }}
          >
            <span>아직 회원이 아니신가요?</span>
          </li>
          <li
            style={{
              marginTop: "0.8rem",
              color: "#898989",
              fontWeight: "600",
            }}
          >
            <span>5초 회원가입하기</span>
          </li>
        </ul>
      </Modal>
    );
  };

  const goToComparePage = () => {
    navigate("/compare/1");

    //alert("로그인 후 이용 가능합니다.");
  };

  return (
    <HeaderMain>
      <ul className="topleft">
        <li>
          <img
            className="textImg"
            onClick={() => {
              navigate("/");
            }}
            src={`${process.env.PUBLIC_URL}/img/mogangtext.png`}
            alt="모강"
          />
        </li>
        <div
          style={{
            display: "flex",
            width: "26rem",
          }}
        >
          <DropdownEdit title="카테고리">
            <DropdowonItemEdit>
              개발
              <DropdownSubEdit>
                <Dropdown.Item>
                  웹개발
                  <DropdownSubEdit>
                    <DropdowonItemEdit>JavaScript</DropdowonItemEdit>
                    <DropdowonItemEdit>ReactJS</DropdowonItemEdit>
                    <DropdowonItemEdit>Html/CSS</DropdowonItemEdit>
                    <DropdowonItemEdit>Node.js</DropdowonItemEdit>
                    <DropdowonItemEdit>Angular</DropdowonItemEdit>
                  </DropdownSubEdit>
                </Dropdown.Item>
              </DropdownSubEdit>
            </DropdowonItemEdit>
          </DropdownEdit>
          <li className="compare" onClick={goToComparePage}>
            비교하기
          </li>
          <li>로드맵</li>
          <li>커뮤니티</li>
        </div>
      </ul>
      <ul className="topRight">
        <li>
          <div className="searchBar">
            <input type="text" placeholder="강의를 검색해주세요" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </li>
        <li>
          <div
            className="loginBtn"
            onClick={() => {
              setIsExtraOption(true);
            }}
          >
            로그인
          </div>
          <PopupMessage />
        </li>
        <li>
          <div
            className="signBtn"
            onClick={() => {
              navigate("/signin");
            }}
          >
            회원가입
          </div>
        </li>
      </ul>
    </HeaderMain>
  );
}

export default Header;
