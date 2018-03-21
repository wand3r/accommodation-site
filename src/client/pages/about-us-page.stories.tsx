import * as React from "react";
import { storiesOf } from "@kadira/storybook";

import { AboutUsPage } from "./about-us-page";
import { CenterDecorator } from "../components/storybook";

storiesOf("About Us page", module)
  .add(
    "Whole page", 
    () => (
      <CenterDecorator size={{ width: "100%", height: "100%" }}>
        <AboutUsPage />
      </CenterDecorator>
    ))
