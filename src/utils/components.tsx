import * as React from "react";
import * as ReactDOM from "react-dom";
import { css } from "glamor";

import { throttle, pipe } from "./";

type VisibilitySensorProps = { 
  threshold: number,
  children?: (visibility?: boolean) => React.ReactNode,
}
type VisibilitySensorState = { visibility?: boolean }
export class VisibilitySensor extends React.PureComponent<VisibilitySensorProps, VisibilitySensorState> {
  static defaultProps: Partial<VisibilitySensorProps> = {
    threshold: 0.5,
  };
  state = {
    visibility: undefined,
  };
  isElementVisibleOnScreen = (elm: Element) => {
    const { threshold } = this.props;
    const elmRect = elm.getBoundingClientRect();
    const { clientHeight: vpHeight } = document.documentElement;
    const visibility = 
      (elmRect.bottom > elmRect.height * threshold) &&
      (elmRect.top < vpHeight - elmRect.height * threshold);
    return visibility;
  };
  updateVisibility = throttle(() => {
      const elm = ReactDOM.findDOMNode(this);
      this.setState({
        visibility: this.isElementVisibleOnScreen(elm),
      });
    },
    100,
  );
  componentDidMount() {
    window.addEventListener("scroll", this.updateVisibility);
    this.updateVisibility();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateVisibility);
  }
  render() {
    const { children } = this.props;
    const { visibility } = this.state;
    if (typeof children !== "function")
      throw new Error("Child element must be a function");
    return React.Children.only(children(visibility));
  }
}


type FitToContainerSizeProps = {
  children?: ((parentSize?: SizeType, childSize?: SizeType) => React.ReactNode) | React.ReactNode
}
type FitToContainerSizeState = {
  parentSize?: SizeType,
  childSize?: SizeType,
}
export class FitToContainerSize extends React.Component<FitToContainerSizeProps,FitToContainerSizeState> {
  _containerDiv?: HTMLDivElement = undefined
  state: FitToContainerSizeState = {
    parentSize: undefined,
    childSize: undefined,
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateSize);
    this.updateSize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
  }

  getElementSize(element: Element | undefined | null): SizeType | undefined {
    if (element == undefined) return undefined;
    const { width, height } = element.getBoundingClientRect();
    return { width, height };
  }
  updateSize = throttle(() => {
    if (this._containerDiv === undefined)
      throw new Error("Container div not rendered");
    
    const parent = this._containerDiv.parentElement;
    const child = this._containerDiv.children[0];

    this.setState({
      parentSize: this.getElementSize(parent),
      childSize: this.getElementSize(child),
    })
  }, 100);

  render() {
    const { children } = this.props;
    const { parentSize, childSize } = this.state;
    if (typeof children !== "function") 
      throw new Error("Child must be function")
    const childElement = pipe(
      children(parentSize, childSize), 
      x => x && React.Children.only(x))

    return (
      <div ref={c => this._containerDiv = c}>
        {childElement}
      </div>
    );
  }
}

//http://www.mademyday.de/css-height-equals-width-with-pure-css.html
type ProportionalDivProps = {
  heightRatio?: number,
  children?: React.ReactNode,
} & Partial<React.HTMLProps<HTMLDivElement>>
export const ProportionalDiv = ({ 
  heightRatio = 1, 
  children, 
  ...other, 
}: ProportionalDivProps) => (
  <div {...css({
      position: "relative",
      ":before": {
        content: '""',
        display: "block",
        paddingTop: `${heightRatio * 100}%`,
      },
    })} {...other}>
    <div {...css({
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
      })}>
      {children}
    </div>
  </div>
);

type DivImgProps = {
  imgSrc: string,
  imgSize: "auto" | "cover" | "contain" | string,
} &  Partial<React.HTMLProps<HTMLDivElement>>
export const DivImg = ({ 
  imgSrc, 
  imgSize, 
  ...other 
}: DivImgProps) => (
  <div
    {...css({ background: `url(${imgSrc}) center / ${imgSize} no-repeat` })}
    {...other}
  />
);