import * as React from "react";
import styled from "styled-components";

const SpreadContainer = styled.div`
  flex-shrink: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  // TODO: consult how much make those close
  grid-gap: 0px 16px;
  height: 100%;
  width: 100%;
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
  pages: [Page, Page | undefined];

  onClickNext: (e: Event) => void;
  onClickPrev: (e: Event) => void;
}

export default function Spread(props: Props) {
  const [first, second] = props.pages;
  return (
    <SpreadContainer>
      {/* TODO: decent way to flip those */}
      {/* TODO: need overlay to create clicker area? */}
      {second && <PageElem resource={second.src} onClick={props.onClickNext} />}
      <PageElem resource={first.src} onClick={props.onClickPrev} />
    </SpreadContainer>
  );
}
