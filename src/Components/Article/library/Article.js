import React from "react";
import DesktopView from "./DesktopView";
import Content from "./Content";
import drawers from "./drawers.jpg";
import Wordings from "./Wordings";

const Article = () => {
  return (
    <DesktopView>
      <Content>
        <img src={drawers} alt="/" />

        <Wordings />
      </Content>
    </DesktopView>
  );
};

export default Article;
