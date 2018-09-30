import styled from "styled-components";

export default styled.button`
  border: 1px solid #fff;
  width: 240px;
  margin: auto;
  background-color: transparent;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #fefefe35;
  }

  &:disabled {
    border-color: #ffffff40;
    color: #ffffff40;
    cursor: default;
    &:hover {
      background-color: transparent;
    }
  }
`;
