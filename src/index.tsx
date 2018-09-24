import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import samples from "./_sample";
import ComicViewer from "./ComicViewer.tsx";

const Section = styled.section`
  margin: 32px;
  padding: 8px 16px;
  border: 1px solid #333;
`;

const ViewerArea = styled.section`
  height: 540px;
  width: 980px;
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
