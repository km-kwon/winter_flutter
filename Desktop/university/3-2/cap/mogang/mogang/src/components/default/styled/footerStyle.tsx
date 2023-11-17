import styled from "styled-components";

const FooterMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20rem;
  background-color: #31373f;
  font-size: 1.2rem;
  margin: 6rem 0 0 0;
  p {
    font-weight: 600;
    color: white;
    margin: 0 0 1rem 0;
  }
  ul {
    list-style: none;
    margin: 0 0 4rem 0;
    padding: 0;
  }
  li {
    color: #b4b4b5;
    margin: 0.5rem 0 0.5rem 0;
  }
`;

export default FooterMain;
