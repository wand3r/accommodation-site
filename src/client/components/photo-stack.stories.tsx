import * as React from "react";
import { storiesOf } from "@kadira/storybook";

import { CenterDecorator } from "../components/storybook";
import { PhotoStack, HoverablePhotoStack } from "./photo-stack";
import { boolean, select } from "@kadira/storybook-addon-knobs";

const samplePhotos = [
  { src: "photos/flat-front/flat-front-living-room-bed-room-2-x0.25.jpg", size: { width: 816, height: 460 } },
  { src: "photos/flat-front/flat-front-living-room-bed-room-1-x0.25.jpg", size: { width: 816, height: 460 } },
  { src: "photos/flat-front/flat-front-living-room-bed-room-3-x0.25.jpg", size: { width: 816, height: 460 } },
  { src: "photos/flat-front/flat-front-living-room-bed-room-4-x0.25.jpg", size: { width: 816, height: 460 } },
]

storiesOf("Photo Stack", module)
  .add("Random rotation", () => (
    <CenterDecorator size={{ width: 400, height: 300 }}>
      <PhotoStack 
        images={samplePhotos.map(photo => ({src: photo.src}))} 
        active={boolean("active", true)}
        effect="randomRotation"
      />
    </CenterDecorator>
  ))
  .add("Fan", () => (
    <CenterDecorator size={{ width: 400, height: 300 }}>
      <PhotoStack 
        images={samplePhotos.map(photo => ({src: photo.src}))} 
        active={boolean("active", true)}
        effect="fan"
      />
    </CenterDecorator>
  ))
  .add("Peek a boo", () => (
    <CenterDecorator size={{ width: 400, height: 300 }}>
      <PhotoStack 
        images={samplePhotos.map(photo => ({src: photo.src}))} 
        active={boolean("active", true)}
        effect="peekBoo"
      />
    </CenterDecorator>
  ))
  .add("Hoverable", () => (
    <CenterDecorator size={{ width: 400, height: 300 }}>
      <HoverablePhotoStack 
        images={samplePhotos.map(photo => ({src: photo.src}))} 
        effect={select("effect", ["randomRotation", "peekBoo", "fan"], "randomRotation") as any}
      />
    </CenterDecorator>
  ));

