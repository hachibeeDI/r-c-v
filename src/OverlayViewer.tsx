import * as React from "react";
import styled from "styled-components";

import ComicViewer, { Props } from "./ComicViewer";

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

interface OverlayProps {
  open: boolean;
}

export default function OverlayViewer(props: OverlayProps & Props) {
  const { open, ...viewerProps } = props;
  debugger;
  if (!open) {
    return null;
  }
  return (
    <ViewerArea>
      <ComicViewer {...viewerProps} />
    </ViewerArea>
  );
}
