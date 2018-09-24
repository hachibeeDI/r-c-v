import * as React from "react";
import styled from "styled-components";

import Spread, { Page } from "./Spread";

function chunk<T>(
  arr: ReadonlyArray<T>,
  chunkSize: number
): any /* TODO: does TS have a trick to make it strict tuple? */ {
  return arr.reduce(
    (prevVal: any, currVal: any, currIndx: number, array: ReadonlyArray<T>) =>
      !(currIndx % chunkSize)
        ? prevVal.concat([array.slice(currIndx, currIndx + chunkSize)])
        : prevVal,
    []
  );
}
const paging: (
  pages: ReadonlyArray<Page>
) => ReadonlyArray<[Page, Page | undefined]> = pages =>
  chunk(pages, PAGE_PER_SPREAD);

const ViewerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Pager = styled<{ page: number }, "div">("div")`
  display: flex;
  flex-flow: row-reverse nowrap;
  width: 100%;
  height: 95%;

  transform: translateX(${({ page }) => page * 100}%);
  transition: transform 0.5s cubic-bezier(0.21, 0.1, 0.25, 1.13);
}
`;

// FIXME: make it flexible
const PAGE_PER_SPREAD = 2;

interface Props {
  images: ReadonlyArray<Page>;
}
interface State {
  currentPage: number;
}

export default class ComicViewer extends React.PureComponent<Props, State> {
  public state = {
    currentPage: 0
  };

  public componentDidMount() {
    document.addEventListener("keydown", this.captureKeyEvent);
  }

  public componentWillUnmount() {
    document.removeEventListener("keydown", this.captureKeyEvent);
  }

  public render() {
    const { currentPage } = this.state;
    const { images } = this.props;

    const chunckedImages = paging(images);
    return (
      <ViewerContainer>
        <Pager page={currentPage}>
          {chunckedImages.map((cimg, i) => (
            <Spread key={i} pages={cimg} />
          ))}
        </Pager>
        <button
          disabled={chunckedImages.length - 1 === currentPage}
          onClick={this.next}
        >
          ←
        </button>
        <button disabled={currentPage === 0} onClick={this.prev}>
          →
        </button>
      </ViewerContainer>
    );
  }

  private captureKeyEvent = e => {
    switch (e.key) {
      case "ArrowLeft":
        this.next();
        break;
      case "ArrowRight":
        this.prev();
        break;
      case "Home":
        this.setState({ currentPage: 0 });
    }
  };

  private next = () =>
    this.setState({ currentPage: this.state.currentPage + 1 });
  private prev = () =>
    this.setState({ currentPage: this.state.currentPage - 1 });
}
