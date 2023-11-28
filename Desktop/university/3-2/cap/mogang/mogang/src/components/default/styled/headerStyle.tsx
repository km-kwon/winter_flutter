import styled from "styled-components";
import Dropdown from "react-multilevel-dropdown";

export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 1rem 1rem 1rem;

  .hidden {
    display: none;
  }
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
    cursor: pointer;
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
    cursor: pointer;
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
    cursor: pointer;
  }
  .compare {
    cursor: pointer;
  }
`;

export const DropdownEdit = styled(Dropdown)`
  cursor: pointer;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 2rem;
`;
export const DropdowonItemEdit = styled(Dropdown.Item)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  li {
    margin: 0;
  }
`;
export const DropdownSubEdit = styled(Dropdown.Submenu)`
  background-color: white;
  left: 100%;
  top: -13px;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    padding: 0;
  }
`;
