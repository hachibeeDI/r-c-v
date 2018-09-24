import * as React from "react";
import styled from "styled-components";

import Spread from "./Spread";

function chunk<T>(arr: Array<T>, chunkSize: number): Array<Array<T>> {
  return arr.reduce(
    (prevVal: any, currVal: any, currIndx: number, array: Array<T>) =>
      !(currIndx % chunkSize)
        ? prevVal.concat([array.slice(currIndx, currIndx + chunkSize)])
        : prevVal,
    []
  );
}

const ViewerContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Pager = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  width: 100%;
  height: 95%;

  transform: translateX(${({ page }) => page * 100}%);
`;

// FIXME: make it flexible
const PAGE_PER_SPREAD = 2;

interface Props {
  images: ReadonlyArray<string>;
}
interface State {
  page: number;
}

export default class ComicViewer extends React.PureComponent<Props, State> {
  public state = {
    page: 0
  };

  public render() {
    const { page } = this.state;
    const { images } = this.props;

    const chunckedImages = chunk(images, PAGE_PER_SPREAD);
    return (
      <ViewerContainer>
        <Pager page={page}>
          {chunckedImages.map((cimg, i) => (
            <Spread key={i} pages={cimg} />
          ))}
        </Pager>
        <button
          disabled={chunckedImages.length - 1 === page}
          onClick={this.next}
        >
          ←
        </button>
        <button disabled={page === 0} onClick={this.before}>
          →
        </button>
      </ViewerContainer>
    );
  }

  private next = () => this.setState({ page: this.state.page + 1 });
  private before = () => this.setState({ page: this.state.page - 1 });
}
