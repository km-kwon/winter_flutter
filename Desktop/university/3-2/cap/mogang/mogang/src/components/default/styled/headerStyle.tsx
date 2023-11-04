import styled from "styled-components";

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 1rem 1rem 1rem;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }
  li {
    margin-right: 2rem;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .textImg {
    height: 4rem;
    width: 7rem;
    margin: 0 0 0 3rem;
  }
  .searchBar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 2rem;
    width: 14rem;
    background-color: #f2f2f2;
    border-radius: 10px;
    font-size: 1rem;
  }
  .searchBar input {
    margin: 0 0 0 0.3rem;
    background-color: transparent;
    border: none;
    outline: none;
  }
  .loginBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    outline: solid 2px black;
    border-radius: 5px;
    width: 3.5rem;
  }
  .signBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    width: 4rem;
    outline: solid 2px #3499fd;
    color: #3499fd;
    border-radius: 5px;
  }
`;

export default HeaderMain;
