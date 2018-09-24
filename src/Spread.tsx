import * as React from "react";
import styled from "styled-components";

const SpreadContainer = styled.div`
  flex-shrink: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px 16px;
  height: 100%;
  width: 100%;
`;
const Page = styled.div`
  width: 100%;;
  height: 100%;

  background-image: url("${({ resource }) => resource.src}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

interface Props {
  pages: [string, string | undefined];
}

export default function Spread(props: Props) {
  const [first, second] = props.pages;
  return (
    <SpreadContainer>
      {/* TODO: decent way to flip those */}
      {second && <Page resource={second} />}
      <Page resource={first} />
    </SpreadContainer>
  );
}
