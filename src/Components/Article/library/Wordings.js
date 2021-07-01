import React from "react";
import Container from "./Container";
import Name from "./Name";
import michelle from "./michelle.jpg";
function Wording() {
  return (
    <Container>
      <h1>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <Name>
        <img src={michelle} alt="" />
        <div>
          <span>Michelle Appleton</span>
          <p> 28 Jun 2020</p>
        </div>
      
      
      </Name>
    </Container>
  );
}

export default Wording;
