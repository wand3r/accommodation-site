import * as React from "react";
import { storiesOf } from "@kadira/storybook";

import { CenterDecorator } from "../utils/storybook";
import { LocalizationPage } from "./localization-page";

storiesOf("Localization page", module)
  .add(
    "Whole page", 
    () => (
      <CenterDecorator size={{ width: "100%" }}>
        <LocalizationPage />
      </CenterDecorator>
    ));
