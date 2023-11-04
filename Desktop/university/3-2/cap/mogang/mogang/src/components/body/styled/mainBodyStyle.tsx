import styled from "styled-components";

const Body_main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 80%;
  margin: 0 auto;
  .hidden {
    display: none; !important
  }

  .recommandBar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 30%;
    background-color: white;
    border-radius: 2rem 2rem 0 0;
    margin: -4.25rem 0 0 0;
    font-weight: 600;
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
  .option {
    width: 80%;
  }
  .temp1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 35%;
    margin: 1rem 0.5rem;
    font-weight: 600;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
  .temp2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 35%;
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
    width: 55%;
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
    width: 100%;
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
    width: 100%;
    height: 13rem;
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
    width: 85%;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
  }
  .toggleMenuContainer:hover{
    padding: 0 0 0 0.8rem;

    border : 0.1rem solid black;
  }

  .detail {
    display: flex;
    align-items: center;
    height: 3rem;
    width: 35%;
    height: 3rem;

    margin: 1rem 0.5rem;
  }
  .Row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .detailCategory1 {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #f2f2f2;
    margin: 0.2rem;
    font-weight: 600;
  }
  
  .detailCategory2 {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
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
  }
`;
export default Body_main;
