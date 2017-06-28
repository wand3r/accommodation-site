import * as React from "react";
import * as ReactDOM from "react-dom";
import { rehydrate } from "glamor";
import { AppContainer } from "react-hot-loader";

import "./utils/arrayExtensions";
import { getPathname } from "./utils/history";

if (window.__glam) {
  rehydrate(window.__glam as any);
}

if (process.env.NODE_ENV !== "production") {
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React);
}

const render = () => {
  const App = require("./app").App;
  ReactDOM.render(
    <AppContainer>
      <App pathname={getPathname()} />
    </AppContainer>,
    document.getElementById("app")
  );
};

render();

if (module.hot) {
  module.hot.accept("./app", () => {
    render();
  });
}