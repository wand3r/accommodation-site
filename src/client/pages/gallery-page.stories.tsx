import * as React from "react";
import { storiesOf } from "@kadira/storybook";

import { GalleryPage } from "./gallery-page";
import { GalleryPage as GalleryPageV2, SelectionView, SectionView } from "./gallery-page-v2";
import { galleryData } from "./gallery-data";

storiesOf("Gallery page", module)
  .add(
    "standard",
    () => (
      <GalleryPage />
  ))
  .add(
    "Version 2",
    () => (
      <GalleryPageV2 sections={galleryData} path="" />
    )
  )
  .add(
    "Selection view",
    () => (
      <SelectionView />
    )
  )
  .add(
    "Section view",
    () => (
      <SectionView {...galleryData[0]} />
    )
  );
