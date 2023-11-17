import styled from "styled-components";

const Lecture_Card = styled.div`
  margin: 0 2rem 0 2rem;
  width: 15rem;
  .hidden {
    display: none;
  }
  #sumbnail {
    height: 10rem;
    width: 100%;
    background-color: #f2f2f2;
    position: relative;
  }
  .tag {
    display: flex;
    align-items: center;
  }
  .tag div {
    padding: 0.3rem;
    margin: 0.4rem;
    border-radius: 10px;
    background-color: #f2f2f2;
  }
  .Like {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    font-size: 1.5rem;
    color: #f97171;
    cursor: pointer;
  }
  #title {
    margin: 0 0 0.3rem 0;
    font-weight: 600;
    font-size: 1.3rem;
  }
  #offer {
    margin: 0 0 0.3rem 0;
    color: black;
    display: flex;
    align-items: center;
  }
  #price {
    color: #0069d9;
    font-weight: 600;
    font-size: 1.2rem;
  }
  #backStar {
    margin: 0 0 0 0.5rem;
    width: 7rem;
  }
  #star {
    margin: 0 0 0 0.5rem;
    width: 7rem;
  }
  .parent {
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 0.4rem 0 0.3rem;
  }
  .child {
    position: absolute;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 5.3rem;
  }
`;

export default Lecture_Card;
