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
    margin-right: 2rem;
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
    margin-right: 2rem;
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
  a {
    text-align: center;
    text-decoration: none;
    color: inherit;
  }
  .menu {
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.5rem;
    position: relative;
  }
  .sub-menu1 {
    display: flex;
    flex-direction: column;
    color: #3499fd;
    align-items: center;
    position: absolute;
    top: 3rem;
    height: 20rem;
    width: 100%;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    box-shadow: 17px 17px 20px -10px black;
  }
  .sub-menu1-list {
    display: flex;
    margin-top: 1rem;
    color: gray;
  }
  .sub-menu1-list {
    color: #3499fd;
  }
  .sub-menu2 {
    display: flex;
    flex-direction: column;
    color: #3499fd;
    align-items: center;
    position: absolute;
    left: 5.6rem;
    top: -1px;
    height: 20rem;
    width: 8.5rem;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    box-shadow: 17px 17px 20px -10px black;
  }
  .sub-menu2-list {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .sub-menu3 {
    display: flex;
    flex-direction: column;
    color: #3499fd;
    align-items: center;
    position: absolute;
    left: 7.4rem;
    top: -1px;
    height: 20rem;
    width: 8.5rem;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    box-shadow: 17px 17px 20px -10px black;
  }
  .sub-menu3-list {
    display: flex;
    margin-top: 1rem;
  }
`;

export default HeaderMain;
