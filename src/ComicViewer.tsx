import * as React from "react";
import { createSelector } from "reselect";
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
const OperationArea = styled.div`
  display: flex;
  height: 5%;
  width: 100%;
`;
const PagingButton = styled.button`
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

    const chunckedImages = this.getChunkedPages();
    return (
      <ViewerContainer>
        <Pager page={currentPage}>
          {chunckedImages.map((cimg, i) => (
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
            disabled={chunckedImages.length - 1 === currentPage}
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
    if (this.state.currentPage !== this.getChunkedPages().length) {
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
