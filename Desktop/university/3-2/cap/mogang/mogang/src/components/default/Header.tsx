import React from "react";
import HeaderMain from "./styled/headerStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <HeaderMain>
      <ul className="topleft">
        <li>
          <img className="textImg" src="img/mogangtext.png" alt="모강" />
        </li>
        <li>카테고리</li>
        <li>로드맵</li>
        <li>커뮤니티</li>
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
