import * as React from "react";
import styled from "styled-components";

import ComicViewer, { Props } from "./ComicViewer";
import { THRESHOLD_AS_MOBILE, THRESHOLD_AS_ROTATED_TABLET } from "./constants";

const ViewerArea = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  height: 100vh;
  width: 100vw;
  background-color: #272728d4;
`;
const ViewerPlacer = styled.section`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 32px 48px;

  @media screen and (max-width: ${THRESHOLD_AS_MOBILE}px) {
    padding: 0px 16px;
  }
  @media screen and (max-width: ${THRESHOLD_AS_ROTATED_TABLET}px) {
    padding: 4px 8px;
  }
`;
const CloseButton = styled.button.attrs({ type: "button" })`
  position: absolute;
  top: 24px;
  right: 48px;
  border-radius: 50%;
  border: 1px solid #e3e3e3;
  background-color: #343434;
  color: white;
  height: 32px;
  width: 32px;
  z-index: 10;
`;

interface OverlayProps {
  open: boolean;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function OverlayViewer(props: OverlayProps & Props) {
  const { open, onClose, ...viewerProps } = props;
  if (!open) {
    return null;
  }
  return (
    <ViewerArea onClick={onClose}>
      <ViewerPlacer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ComicViewer {...viewerProps} />
      </ViewerPlacer>
    </ViewerArea>
  );
}
