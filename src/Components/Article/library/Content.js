import styled from "styled-components";

const Content = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    border-radius: 10px;
    height: 90%;
    img {
      width: 100% !important;
      position: relative;
      bottom: 10px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      height: auto;
    }
  }

  /* Desktop */
  img {
    width: 45%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  width: 70%;
  padding: 0%;
  margin: 0%;
  align-items: center;
  border-radius: 10px;

  background-color: white;
`;

export default Content;
