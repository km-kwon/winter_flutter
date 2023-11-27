import styled from "styled-components";

const Body_main = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 100%;
    list-style: none;
  }
  li {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
  }
  input {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 3px solid gray;
    font-size: 1.5rem;
    height: 70%;
    width: 100%;
    padding: 0.5rem 1rem;
  }
  input:focus {
    outline: none;
    border-bottom: 3px solid #007bfb;
  }
  .title {
    margin-top: 3rem;
    font-size: 2rem;
    color: #007bfb;
  }
  .agree {
    height: 5%;
    display: flex;
    align-items: center;
  }
  .agree span {
    color: #919191;
    margin: 0 0 0 auto;
  }
  .agree input {
    width: 7%;
    height: 70%;
  }
  .name {
    display: flex;
    margin-top: 1rem;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 15%;
  }
  button {
    background-color: transparent;
    font-size: 1.3rem;
    padding: 0.5rem;
    border-radius: 15px;
    border: 3px solid #007bfb;
    color: #007bfb;
    margin: 1rem 0 0 auto;
  }
`;
export default Body_main;
