import styled from "styled-components";

const Lecture_Card = styled.div`
  width: 30%;

  #sumbnail {
    height: 10rem;
    width: 100%;
    background-color: #f2f2f2;
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
  #title {
    margin: 0 0 0.3rem 0;
    font-weight: 600;
    font-size: 1.3rem;
  }
  #offer {
    margin: 0 0 0.3rem 0;
    color: black;
  }
`;

export default Lecture_Card;
