import * as React from "react";
import styled from "styled-components";

const SpreadContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0px 16px;
`;
const Page = styled.div`
  width: 40%;
  height: 100%;
`;

interface Props {
  pages: [string, string?];
}

export default function Spread(props: Props) {
  const [first, second] = props.pages;
  return (
    <SpreadContainer>
      <Page resource={first} />
      {second && <Page resource={second} />}
    </SpreadContainer>
  );
}
