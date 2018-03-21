import * as React from "react";
import * as ReactDOM from "react-dom";
import { throttle, pipe } from "../../utils/";

type Props = { 
  threshold: number,
  children?: (visibility?: boolean) => React.ReactNode,
}

type State = { visibility?: boolean }

export class VisibilitySensor extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
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