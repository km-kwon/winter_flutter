import React from "react";
import HeaderMain from "./styled/headerStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Header() {
  const [isSubMenu1Visible, setSubMenu1Visible] = useState(false);
  const [isSubMenu2Visible, setSubMenu2Visible] = useState(false);
  const [isSubMenu3Visible, setSubMenu3Visible] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      const isClickOutside =
        !event.target.closest(".menu") &&
        !event.target.closest(".sub-menu1") &&
        !event.target.closest(".sub-menu2") &&
        !event.target.closest(".sub-menu3");
      if (isClickOutside) {
        setSubMenu1Visible(false);
        setSubMenu2Visible(false);
        setSubMenu3Visible(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      title: "카테고리",
      url: "/",
      submenu: [
        {
          title: "개발1",
          url: "/",
          submenu: [
            {
              title: "1의 웹 개발",
              url: "/",
              submenu: [
                { title: "JavaScript", url: "/" },
                { title: "ReactJS", url: "/" },
              ],
            },
            {
              title: "앱 개발",
              url: "/",
            },
          ],
        },
        {
          title: "우야호",
          url: "/",
        },
        { title: "개발", url: "/" },
      ],
    },
  ];

  const handleSubMenu1Click = () => {
    setSubMenu1Visible(!isSubMenu1Visible);
    setSubMenu2Visible(false);
    setSubMenu3Visible(false);
  };

  const handleSubMenu2Click = () => {
    setSubMenu2Visible(!isSubMenu2Visible);
    setSubMenu3Visible(false);
  };

  return (
    <HeaderMain>
      <ul className="topleft">
        <li>
          <img className="textImg" src="img/mogangtext.png" alt="모강" />
        </li>
        {menuItems.map((menu, index) => {
          return (
            <li
              style={{
                height: "4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "8.5rem",
                position: "relative",
              }}
              key={index}
              onMouseEnter={handleSubMenu1Click}
            >
              <span>{menu.title}</span>
              {menu.submenu && isSubMenu1Visible && (
                <div className="sub-menu1">
                  <div style={{ position: "relative" }}>
                    {menu.submenu.map((menu, index) => {
                      return (
                        <li
                          className="sub-menu1-list"
                          key={index}
                          onClick={handleSubMenu2Click}
                        >
                          <span>{menu.title}</span>
                          {menu.submenu && isSubMenu2Visible && (
                            <div className="sub-menu2">
                              <div style={{ position: "relative" }}>
                                {menu.submenu.map((menu, index) => {
                                  return (
                                    <li
                                      className="sub-menu2-list"
                                      key={index}
                                      onClick={() => setSubMenu3Visible(true)}
                                    >
                                      <span>{menu.title}</span>
                                      {menu.submenu && isSubMenu3Visible && (
                                        <div className="sub-menu3">
                                          {menu.submenu.map((menu, index) => {
                                            return (
                                              <li
                                                className="sub-menu3-list"
                                                key={index}
                                              >
                                                <a href={menu.url}>
                                                  {menu.title}
                                                </a>
                                              </li>
                                            );
                                          })}
                                        </div>
                                      )}
                                    </li>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </div>
                </div>
              )}
            </li>
          );
        })}
        <li className="menu">비교하기</li>
        <li className="menu">로드맵</li>
        <li className="menu">커뮤니티</li>
      </ul>
      <ul className="topRight">
        <li>
          <div className="searchBar">
            <input type="text" placeholder="강의를 검색해주세요" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </li>
        <li>
          <div className="loginBtn">로그인</div>
        </li>
        <li>
          <div className="signBtn">회원가입</div>
        </li>
      </ul>
    </HeaderMain>
  );
}

export default Header;
