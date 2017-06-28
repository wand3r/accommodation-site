import * as React from "react";
import { storiesOf } from "@kadira/storybook";

import { CenterDecorator } from "../utils/storybook";
import { PhotoCarouselGallery } from "./photo-carousel-gallery";

const samplePhotos = [
  { src: "photos/flat-front/flat-front-living-room-bed-room-2-x0.25.jpg", size: { width: 816, height: 460 } },
  { src: "photos/flat-front/flat-front-living-room-bed-room-1-x0.25.jpg", size: { width: 816, height: 460 } },
  { src: "photos/flat-front/flat-front-kitchen-1-x0.25.jpg", size: { width: 460, height: 816 } },
  { src: "photos/flat-front/flat-front-living-room-bed-room-3-x0.25.jpg", size: { width: 816, height: 460 } },
  { src: "photos/flat-front/flat-front-living-room-bed-room-4-x0.25.jpg", size: { width: 816, height: 460 } },
  { src: "photos/flat-front/flat-front-bathroom-1-x0.25.jpg", size: { width: 460, height: 816 } },
  { src: "photos/flat-back/flat-back-living-room-2-x0.25.jpg", size: { width: 816, height: 460 } },
  { src: "photos/flat-back/flat-back-living-room-1-x0.25.jpg", size: { width: 816, height: 460 } },
  { src: "photos/flat-back/flat-back-bedroom-1-x0.25.jpg", size: { width: 460, height: 816 } },
  { src: "photos/flat-back/flat-back-kitchen-1-x0.25.jpg", size: { width: 816, height: 460 } },
  { src: "photos/flat-back/flat-back-bedroom-2-x0.25.jpg", size: { width: 816, height: 460 } },
  { src: "photos/flat-back/flat-back-bathroom-1-x0.25.jpg", size: { width: 460, height: 816 } },
]

storiesOf("Photo Carousel Gallery", module)
  .add("Complete component", () => (
    <CenterDecorator size={{ width: 600, height: 400 }}>
      <PhotoCarouselGallery
        photos={samplePhotos}
        proportionBetweenForegroundAndBackgroundPhotos={1.5}
        initialSelectedPhotoIndex={0}
        componentSize={{width: 600, height: 400}}
      />
    </CenterDecorator>
  ));
