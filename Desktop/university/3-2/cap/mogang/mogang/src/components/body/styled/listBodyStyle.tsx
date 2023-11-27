import styled from "styled-components";

const Body_main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-items :center;

  .hidden {
    display: none; !important
  }
  .title {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #56a8ff;
    height: 10rem;
  }
  .titleBox{
    width: 880px;
    display:flex;
    flex-direction: column;
  }

  #recommand {
    margin: 0 1rem 0 0;
    font-size: 0.1rem;
  }
  .recommandOption {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: white;
    border-radius: 0 2rem 2rem 2rem;
    box-shadow: 17px 17px 20px -10px gray;
  }

  .menu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15rem;
    cursor: pointer;
  }
  .temp1 {
    
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    padding: 0 1rem 0 1rem;
    margin: 1rem 0.5rem;
    font-weight: 600;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
  .temp2 {
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    padding: 0 1rem 0 1rem;
    margin: 1rem 0.5rem;
    font-weight: 600;
    background-color: #56a8ff;
    border-radius: 10px;
    color: white;
  }
  .listDetail {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
    height: 3rem;
    width: 9rem;
    margin: 1rem 0.5rem;
    font-weight: 600;
    background-color: #f2f2f2;
    border-radius: 10px;
    color: gray;
  }

  .toggleMenu1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    margin: 1rem 0 0 0;
    width: 20rem;
    height: 13rem;
    left: 0;
    background-color: #f2f2f2;
    border-radius: 10px;
    z-index: 2;
  }
  .toggleMenu2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    margin: 1rem 0 0 0;
    width: 20rem;
    height: 14rem;
    left: 0;
    background-color: #f2f2f2;
    border-radius: 10px;
    z-index: 1;
  }

  .toggleMenuContainer {
    display: flex;
    align-items: center;
    padding: 0 0 0 1rem;
    margin: 1rem 0 0 0;
    height: 3.2rem;
    width: 15rem;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
  }
  .toggleMenuContainer:hover {
    padding: 0 0 0 0.8rem;
    border: 0.1rem solid black;
  }

  .detail {
    display: flex;
    align-items: center;
    height: 3rem;
    margin: 1rem 0.5rem;
  }
  .Row {
    display: flex;
    align-items: center;
    width: 55rem;
    justify-content: space-between;
  }
  .detailCategory1 {
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    background-color: #f2f2f2;
    margin: 0.2rem;
    font-weight: 600;
  }

  .detailCategory2 {
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    background-color: #56a8ff;
    color: white;
    margin: 0.2rem;
    font-weight: 600;
  }
  #searchBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 5rem;
    margin: 0 1rem 0 1rem;
    border-radius: 10px;
    outline: solid 2px #3499fd;
    color: #3499fd;
    font-weight: 600;
  }

  .popularLecture {
    width: 100%;
    margin: 4rem 0 0 0;
  }
  .popularLecture p {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 1rem;
  }
  .list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0 1rem 0;
  }
  .pageInfo{
    margin: 3rem 0 0 0;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .curPage{
    display: flex;
    justify-content :center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border: 1px solid black;
    border-radius: 50%;
    margin: 0.5rem;
  }
`;
export default Body_main;
