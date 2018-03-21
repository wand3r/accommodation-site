import * as React from "react";
import { storiesOf } from "@kadira/storybook";

import { CenterDecorator } from "../components/storybook";
import { data } from "./attractions-data";
import {
  AttractionsPage,
  Attraction,
  AttractionAnime,
} from "./attractions-page";


storiesOf("Attractions page", module)
  .add("Whole page", () => (
    <CenterDecorator size={{ width: "100%", height: "auto" }}>
      <AttractionsPage />
    </CenterDecorator>
  ))
  .add("Single attraction not hovered", () => (
    <CenterDecorator size={{ width: 400, height: 400 }}>
      <Attraction {...data[0]} hovered={false} />
    </CenterDecorator>
  ))
  .add("Single attraction hovered", () => (
    <CenterDecorator size={{ width: 400, height: 400 }}>
      <Attraction {...data[0]} hovered={true} />
    </CenterDecorator>
  ))
  .add("Single attraction with animation", () => (
    <CenterDecorator size={{ width: 400, height: 400 }}>
      <AttractionAnime {...data[0]} />
    </CenterDecorator>
  ));
