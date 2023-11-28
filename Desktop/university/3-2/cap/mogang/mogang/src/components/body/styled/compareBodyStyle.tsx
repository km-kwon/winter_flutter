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
.subtitle{
  width: 880px;
  margin: 2rem 0 3rem 0;
  font-size: 2rem;
  font-weight: 600;
}
.carsContainer{
  display: flex;
  width: 60rem;
  align-items:center;
  height: 30rem;
  justify-content: space-around;
}
.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 37%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 20px -10px gray;
  background-color: #f4f4f4;
  overflow: hidden;
  font-size: 0.9rem;
}
#tumbnailBox{
  position: relative;
  width: 100%;
  height: 60%;
  background-color: red; 
}
#tumbnail{
  width: 100%;
  height: 100%;
}
.extra{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 55%;
}
.explain1{
  display: flex;
  align-items:center;
  justify-content: space-between;
  margin: 1rem 0 0 0;
  font-weight: 600;
  
  width: 90%;
}
.level{
  display:flex;
  justify-content: center;
  align-items: center;
  height:1.5rem;
  width: 3rem;
  border: 1px solid black;
  border-radius: 7px;
}
.explain2{
  margin: 1rem 0 0 0;
  font-weight: 600;
  display: flex;
  flex-direction: column; 
  width: 90%;
}
.explain2 div{
  margin: 0 0 0.5rem 0;
}
.explain2 span{
  margin: 0 0 0.5rem 0;
}
.plus{
  font-size: 3rem;
  color: gray;
  cursor: pointer;
}
.X{
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 1.5rem;  
}
.modal{
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.3rem;
  height: 100%;
}
.modalHeader{
  display: flex;
}
.icon{
  color: #f97171;
  font-size: 4rem;
}


 `;
export default Body_main;
