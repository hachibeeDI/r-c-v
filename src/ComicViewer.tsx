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

const ViewerContainer = styled.div``;
const Pager = styled.div``;

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
    return (
      <ViewerContainer>
        <Pager>
          {chunk(images, PAGE_PER_SPREAD).map(chunckedImages => (
            <Spread img={chunckedImages} />
          ))}
        <Pager>
        <button disable={images.length === page} onClick={this.next}>
          ←
        </button>
        <button disable={page === 0} onClick={this.before}>
          →
        </button>
      </ViewerContainer>
    );
  }

  private next = () => this.setState({ page: this.state.page + 1 });
  private before = () => this.setState({ page: this.state.page - 1 });
}
