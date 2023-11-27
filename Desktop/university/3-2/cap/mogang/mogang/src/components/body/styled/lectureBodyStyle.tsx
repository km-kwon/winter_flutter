import styled from "styled-components";

const Body_main = styled.div<{ score: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98.8vw;
  align-items: center;

  .hidden {
    display: none;
  }
  .info {
    display: flex;
    width: 100%;
    height: 30rem;
    align-items: center;
    justify-content: center;
    background-color: #69a6f8;
  }
  #tumbnailBox {
    height: 65%;
    width: 35%;
    background-color: #f2f2f2;
    position: relative;
  }
  #tumbnail {
    height: 100%;
    width: 100%;
  }
  .Like {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    font-size: 3rem;
    color: #f97171;
    cursor: pointer;
  }
  .detail {
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 65%;
    margin: 0 0 0 4rem;
    color: white;
  }
  .detail li {
    display: flex;
    align-items: center;

    list-style: none;
    margin: 0 0 1rem 0;
  }

  .parent {
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 0.4rem 0 0.3rem;
  }
  .parent img {
    height: 2rem;
  }
  .child {
    position: absolute;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: ${(props) => (props.score / 5) * 100}%;
  }
  .frameContainer {
    width: 90%;
    height: 2250px;
    overflow: hidden;
    position: relative;
  }
`;
export default Body_main;
