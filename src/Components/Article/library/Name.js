import styled from "styled-components";

const Container = styled.div`
  @media only screen and (max-width: 768px) {
    img {
      border-radius: 50px !important;
      width: 60px !important;
    }
    p {
      margin-top: 0px;
      margin-bottom: 3px;
    }
    span {
      font-weight: 700;
    }
    div {
      margin-top: 10px;
    }

    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
  }

  /* Desktop */
  img {
    border-radius: 50px;
    width: 40px;
    height: auto;
  }
  p {
    margin-top: 0px;
    margin-bottom: 3px;
  }
  span {
    font-weight: 700;
  }
  div {
    margin-left: 10px;
  }

  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 300px;
`;

export default Container;
