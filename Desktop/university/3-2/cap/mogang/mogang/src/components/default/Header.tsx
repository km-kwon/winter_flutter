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
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

function Header() {
  const [isExtraOption, setIsExtraOption] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let id = "";
  let password = "";

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (index === 0) {
      id = event.target.value;
    }
    if (index === 1) {
      password = event.target.value;
    }
  };

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
        height: "60%",
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

    const login = async () => {
      console.log(id, password);
      const url = "http://27.119.53.12:4000/graphql";
      try {
        const response = await axios.post(
          url,
          {
            query: `
      mutation LoginOutput($loginInput: LoginInputDto!) {
        login(loginInput: $loginInput) 
        {
          ok 
          message
          accessToken 
        }
      }
    `,
            variables: {
              loginInput: {
                email: id,
                password: password,
              },
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data.data.login);
        localStorage.setItem("jwt-token", response.data.data.login.accessToken);
        navigate("/");
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    };

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
                margin: "2rem 2rem 1.8rem 2rem",
              }}
              className="textImg"
              src={`${process.env.PUBLIC_URL}/img/mogangtext.png`}
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
              <input
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "0 1rem",
                  fontSize: "1.4rem",
                  border: "solid 2px #b1b1b1",
                  borderRadius: "15px",
                }}
                id="id"
                type="text"
                placeholder="이메일"
                onChange={(e) => handleChange(e, 0)}
              />
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
              <input
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "0 1rem",
                  fontSize: "1.4rem",
                  border: "solid 2px #b1b1b1",
                  borderRadius: "15px",
                }}
                id="password"
                type="password"
                placeholder="비밀번호"
                onChange={(e) => handleChange(e, 1)}
              />
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
            <span
              onClick={() => {
                if (window.location.pathname === "/signin") {
                  setIsExtraOption(false);
                }
                navigate("/signin");
              }}
            >
              5초 회원가입하기
            </span>
          </li>
        </ul>
      </Modal>
    );
  };

  const goToComparePage = () => {
    navigate("/list/1");

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
                    <DropdowonItemEdit
                      onClick={() => {
                        navigate("/list/1", {
                          state: {
                            categoryName: "개발",
                            detailCategoryName: "JavaScript",
                            option: -1,
                            free: true,
                          },
                        });
                      }}
                    >
                      JavaScript
                    </DropdowonItemEdit>
                    <DropdowonItemEdit>ReactJS</DropdowonItemEdit>
                    <DropdowonItemEdit>Html/CSS</DropdowonItemEdit>
                    <DropdowonItemEdit>Node.js</DropdowonItemEdit>
                    <DropdowonItemEdit>Angular</DropdowonItemEdit>
                  </DropdownSubEdit>
                </Dropdown.Item>
              </DropdownSubEdit>
            </DropdowonItemEdit>
          </DropdownEdit>
          <li
            className="compare"
            onClick={() => {
              if (localStorage.getItem("jwt-token") === null) {
                alert("로그인을 해주세요!");
              } else {
                navigate("/compare");
              }
            }}
          >
            비교하기
          </li>
          <li>로드맵</li>
          <li>커뮤니티</li>
        </div>
      </ul>
      <ul className="topRight">
        <li className="hidden">
          <div className="searchBar">
            <input type="text" placeholder="강의를 검색해주세요" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </li>
        <li>
          <div
            className={
              localStorage.getItem("jwt-token") === null ? "loginBtn" : "hidden"
            }
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
            className={
              localStorage.getItem("jwt-token") === null ? "signBtn" : "hidden"
            }
            onClick={() => {
              navigate("/signin");
            }}
          >
            회원가입
          </div>
        </li>
        <li>
          <div
            className={
              localStorage.getItem("jwt-token") === null ? "hidden" : "signBtn"
            }
            onClick={() => {
              localStorage.removeItem("jwt-token");
              navigate("/");
              window.location.reload();
            }}
          >
            로그아웃
          </div>
        </li>
      </ul>
    </HeaderMain>
  );
}

export default Header;
