import styled from "styled-components";


const DesktopView = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: hsl(210, 46%, 95%);
  }

  /* DesktopView */

  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 0%;
  border-radius: 10px;
  flex-direction:row;
  margin: 0%;
  align-items: center;
  justify-content: center;
  background-color: hsl(210, 46%, 95%);
`;

export default DesktopView;
