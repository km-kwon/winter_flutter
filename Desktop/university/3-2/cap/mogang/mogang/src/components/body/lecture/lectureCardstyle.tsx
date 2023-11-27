import styled from "styled-components";

const Lecture_Card = styled.div<{ score: number }>`
  margin: 0 2rem 0 2rem;
  width: 17rem;
  cursor: pointer;
  .hidden {
    display: none;
  }
  #tumbnailBox {
    height: 10rem;
    width: 100%;
    background-color: #f2f2f2;
    position: relative;
  }
  #tumbnail {
    width: 100%;
    height: 100%;
  }
  .tag {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
  }
  .tag div {
    padding: 0.3rem;
    margin: 0.4rem;
    font-size: 0.9rem;
    font-weight: 600;
    height: 1.5rem;
    border-radius: 10px;
    background-color: #f2f2f2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: pre;
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
    height: 3.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
    margin: 0 0.4rem 0 0;
  }
  .child {
    position: absolute;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: ${(props) => (props.score / 5) * 100}%;
  }
`;

export default Lecture_Card;
