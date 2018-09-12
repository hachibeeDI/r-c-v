import * as React from 'react';
import {render} from 'react-dom';
import styled from 'styled-components';

const Section = styled.section`
  margin: 32px;
  padding: 8px 16px;
  border: 1px solid #333;
`;

function App() {
  return (
    <Section>
      <h1>Hello TypeScript + React App Starter!!!</h1>
    </Section>
  );
}

render(<App />, document.getElementById('app'));
