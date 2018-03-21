import * as React from "react";
import { storiesOf } from "@kadira/storybook";


import { ContactPage } from "./contact-page";
import { CenterDecorator } from "../components/storybook";

storiesOf("Contact page", module)
  .add(
    "Whole page", 
    () => (
      <CenterDecorator size={{ width: "100%" }}>
        <ContactPage />
      </CenterDecorator>
    ));
