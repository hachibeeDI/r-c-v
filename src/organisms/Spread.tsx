import * as React from "react";
import Swipe from "react-swipe-component";
import styled from "styled-components";

import { THRESHOLD_AS_MOBILE, THRESHOLD_AS_ROTATED_TABLET } from "../constants";

const SpreadContainer = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  // TODO: consult how much make those close
  grid-gap: 0px 16px;
  height: 100%;
  width: 100%;

  @media screen and (max-width: ${THRESHOLD_AS_MOBILE}px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
  @media screen and (max-width: ${THRESHOLD_AS_ROTATED_TABLET}px) {
    padding: 0 4px;
    grid-gap: 0px 8px;
  }
`;
const PageElem = styled<{ resource: string }, "div">("div")`
  width: 100%;
  height: 100%;

  cursor: pointer;

  background-image: url("${({ resource }) => resource}");
  background-repeat: no-repeat;
  background-size: contain;
  // background-position: center;

  // TODO: what if we ganna address foreign's comic?
  &:first-child {
    background-position: right;
  }
  &:last-child {
    background-position: left;
  }
`;

export interface Page {
  src: string;
}

interface Props {
  isSmallDisplay: boolean;
  pages: [Page, Page | undefined];

  onNext: () => void;
  onPrev: () => void;
}

export default function Spread(props: Props) {
  const {
    isSmallDisplay,
    pages: [first, second]
  } = props;
  return (
    <Swipe
      nodeName={SpreadContainer}
      mouseSwipe={true}
      onSwipedLeft={props.onPrev}
      onSwipedRight={props.onNext}
    >
      {/* TODO: decent way to flip those */}
      {/* TODO: need overlay to create clicker area? then we can be able to handle click event also on mobile */}
      {second && (
        <PageElem
          resource={second.src}
          onClick={isSmallDisplay ? undefined : props.onNext}
        />
      )}
      <PageElem
        resource={first.src}
        onClick={isSmallDisplay ? undefined : props.onPrev}
      />
    </Swipe>
  );
}
