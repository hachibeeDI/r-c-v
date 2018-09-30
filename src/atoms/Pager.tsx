import styled from "styled-components";

export default styled<{ page: number }, "div">("div")`
  display: flex;
  flex-flow: row-reverse nowrap;
  width: 100%;
  height: 95%;

  transform: translateX(${({ page }) => page * 100}%);
  transition: transform 0.5s cubic-bezier(0.21, 0.1, 0.25, 1.13);
}
`;
