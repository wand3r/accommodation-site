import * as React from "react";

import { Layout } from "./pages/layout";
import { addOnChangeListener, removeOnChangeListener } from "./utils/history";
import { applyGlobalStyle } from "./style";
import { pages } from "./pages";

applyGlobalStyle();

type AppProps = {
  pathname: string;
};
export class App extends React.Component<AppProps, { pathname: string }> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      pathname: this.props.pathname,
    };
  }
  onPathnameChange = (pathname: string) => this.setState({ pathname });
  componentDidMount() {
    console.log(`TTI: ${performance.now()}`);
    addOnChangeListener(this.onPathnameChange);
  }
  componentWillUnmount() {
    removeOnChangeListener(this.onPathnameChange);
  }
  render() {
    const { pathname } = this.state;
    return <Layout pages={pages} currentPathname={pathname} />;
  }
}
