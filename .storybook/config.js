import { configure, addDecorator } from "@kadira/storybook";
import { withKnobs } from "@kadira/storybook-addon-knobs";

import "../src/utils/arrayExtensions";
import { applyGlobalStyle } from "../src/style";

const reg = require.context("../src", true, /.stories.tsx$/);

function loadStories() {
  reg.keys().forEach(filename => reg(filename));
}

addDecorator(withKnobs);
applyGlobalStyle();

configure(loadStories, module);
