import * as React from "react";
import { storiesOf } from "@kadira/storybook";
import { number } from "@kadira/storybook-addon-knobs";

import { PhotoGridLayout } from "./photo-grid-layout";
import { CenterDecorator } from "../utils/storybook";

const photos = [
  { src: "photos/flat-front/flat-front-living-room-bed-room-2-x0.25.jpg", width: 816, height: 460 },
  { src: "photos/flat-front/flat-front-living-room-bed-room-1-x0.25.jpg", width: 816, height: 460 },
  { src: "photos/flat-front/flat-front-kitchen-1-x0.25.jpg", width: 460, height: 816 },
  { src: "photos/flat-front/flat-front-living-room-bed-room-3-x0.25.jpg", width: 816, height: 460 },
  { src: "photos/flat-front/flat-front-living-room-bed-room-4-x0.25.jpg", width: 816, height: 460 },
  { src: "photos/flat-front/flat-front-bathroom-1-x0.25.jpg", width: 460, height: 816 },
  { src: "photos/flat-back/flat-back-living-room-2-x0.25.jpg", width: 816, height: 460 },
  { src: "photos/flat-back/flat-back-living-room-1-x0.25.jpg", width: 816, height: 460 },
  { src: "photos/flat-back/flat-back-bedroom-1-x0.25.jpg", width: 460, height: 816 },
  { src: "photos/flat-back/flat-back-kitchen-1-x0.25.jpg", width: 816, height: 460 },
  { src: "photos/flat-back/flat-back-bedroom-2-x0.25.jpg", width: 816, height: 460 },
  { src: "photos/flat-back/flat-back-bathroom-1-x0.25.jpg", width: 460, height: 816 },
]

const padding = (x: number) => number('Padding between photos', x)
const photosInRow = (x: number) => number('Photos in row count', x)
const containerWidth = (x: number) => number('Container width', x)

storiesOf('PhotoGridLayout', module)
  .add('with even photos 2 per row horizontal', () => (
    <CenterDecorator size={{width: 500}}>
      <PhotoGridLayout
        photos={photos}
        containerWidth={containerWidth(500)}
        paddingBetweenPhotos={padding(5)}
        photosInRowCount={photosInRow(2)}
        direction="horizontal"
      />
    </CenterDecorator>
  ))
  .add('with uneven photos 2 per row horizontal', () => (
    <CenterDecorator size={{width: 500}}>
      <PhotoGridLayout
        photos={photos.slice(0, -1)}
        containerWidth={containerWidth(500)}
        paddingBetweenPhotos={padding(5)}
        photosInRowCount={photosInRow(2)}
        direction="horizontal"
      />
    </CenterDecorator>
  ))
  .add('with even photos 2 per row vertical', () => (
    <CenterDecorator size={{width: 500}}>
      <PhotoGridLayout
        photos={photos}
        containerWidth={containerWidth(500)}
        paddingBetweenPhotos={5}
        photosInRowCount={2}
        direction="vertical"
      />
    </CenterDecorator>
  ))
  .add('with uneven photos 2 per row vertical', () => (
    <CenterDecorator size={{width: 500}}>
      <PhotoGridLayout
        photos={photos.slice(0, -1)}
        containerWidth={containerWidth(500)}
        paddingBetweenPhotos={5}
        photosInRowCount={2}
        direction="vertical"
      />
    </CenterDecorator>
  ))