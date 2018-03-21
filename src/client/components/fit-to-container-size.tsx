import * as React from "react";
import * as ReactDOM from "react-dom";

import { throttle, pipe } from "../../utils/";

type Props = {
  children?: ((parentSize?: SizeType, childSize?: SizeType) => React.ReactNode) | React.ReactNode
}

type State = {
  parentSize?: SizeType,
  childSize?: SizeType,
}

export class FitToContainerSize extends React.Component<Props,State> {
  _containerDiv?: HTMLDivElement = undefined

  state: State = {
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
