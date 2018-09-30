import * as React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";

import Pager from "./atoms/Pager";
import PagingButton from "./atoms/PagingButton";
import Spread, { Page } from "./organisms/Spread";

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

const OperationArea = styled.div`
  display: flex;
  height: 5%;
  width: 100%;
`;

// FIXME: make it flexible
const PAGE_PER_SPREAD = 2;

export interface Props {
  images: ReadonlyArray<Page>;
}
interface State {
  currentPage: number;
}

const pagingSelector = createSelector(
  (props: Props) => props.images,
  images => paging(images)
);

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

    return (
      <ViewerContainer>
        <Pager page={currentPage}>
          {this.getChunkedPages().map((cimg, i) => (
            <Spread
              key={i}
              pages={cimg}
              onClickNext={this.handleNextClick}
              onClickPrev={this.handlePrevClick}
            />
          ))}
        </Pager>
        <OperationArea>
          <PagingButton
            disabled={this.haveDone()}
            onClick={this.handleNextClick}
          >
            next
          </PagingButton>
          <PagingButton
            disabled={currentPage === 0}
            onClick={this.handlePrevClick}
          >
            prev
          </PagingButton>
        </OperationArea>
      </ViewerContainer>
    );
  }

  private haveDone() {
    return this.getChunkedPages().length - 1 === this.state.currentPage;
  }

  private getChunkedPages = () => pagingSelector(this.props);
  private captureKeyEvent = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        this.next();
        break;
      case "ArrowRight":
        this.prev();
        break;
      case "Home":
        this.setState({ currentPage: 0 });
        break;
      case "End":
        this.setState({ currentPage: this.getChunkedPages().length - 1 });
        break;
    }
  };

  private handleNextClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    this.next();
  };
  private next = () => {
    if (!this.haveDone()) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  };

  private handlePrevClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    this.prev();
  };
  private prev = () => {
    if (this.state.currentPage !== 0) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };
}
