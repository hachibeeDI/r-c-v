import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import samples from "./_sample";
import ComicViewer from "./ComicViewer";

const Section = styled.section`
  margin: 32px;
  padding: 8px 16px;
  border: 1px solid #333;
`;

const ViewerArea = styled.section`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  margin: auto;

  box-sizing: border-box;
  padding: 32px 48px
  height: 100vh;
  width: 100vw;
  background-color: #272728d4;
`;

function App() {
  return (
    <Section>
      <h1>Hello TypeScript + React App Starter!!!</h1>
      <ViewerArea>
        <ComicViewer images={samples} />
      </ViewerArea>
    </Section>
  );
}

render(<App />, document.getElementById("app"));
