import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import samples from "./_sample";
import OverlayViewer from "./OverlayViewer";

const Section = styled.section`
  margin: 32px;
  padding: 8px 16px;
  border: 1px solid #333;
`;

class App extends React.PureComponent {
  public state = { reading: false };
  public render() {
    return (
      <Section>
        <h1>Hello TypeScript + React App Starter!!!</h1>

        <button onClick={() => this.setState({ reading: !this.state.reading })}>
          Manga!
        </button>

        <OverlayViewer open={this.state.reading} images={samples} />
      </Section>
    );
  }
}

render(<App />, document.getElementById("app"));
