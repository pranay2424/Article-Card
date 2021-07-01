import styled from "styled-components";

const Container = styled.div`
  @media only screen and (max-width: 768px) {
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    font-family: "Manrope", sans-serif;
    color: rgb(65, 70, 80);
    justify-content: center;
    flex-direction: column;

    h1 {
      width: 330px !important;
      font-size: 20px;
      margin: 0px;
      margin-top: 30px !important;
    }

    p {
      width: 330px !important;
      color: hsl(214, 17%, 51%);
     margin-top: 5px;
      font-size: 15px;
    }
  }

  h1 {
    width: 550px;
  }

  /* Desktop */
  p {
    width: 500px;
    color: hsl(214, 17%, 51%);
  }

  max-height: 500px;
  width: 600px;
  display: flex;
  font-family: "Manrope", sans-serif;
  color: rgb(65, 70, 80);
  justify-content: center;
  flex-direction: column;
`;

export default Container;
