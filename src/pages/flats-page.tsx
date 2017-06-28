import * as React from "react";
import { PhotoCarouselGallery } from "./../components/photo-carousel-gallery";
import flatsData, { FlatData, FlatDetailData } from "./flats-data";
import { css } from "glamor";
import { theme } from "./../theme";
import { FitToContainerSize } from "../utils/components";

type FlatDetailsProps = { 
  details: FlatDetailData[]
}
const FlatDetails = ({ details }: FlatDetailsProps) => (
  <div
    {...css({ display: "flex", flex: "1", flexDirection: "column" })}
  >
    {details.map(({ label, description }, index) => (
      <div key={index}>
        <p {...css({ ...theme.standardTextHeader, margin: "10px 0 5px" })}>
          {label}
        </p>
        <div {...css({ ...theme.standardText })}>
          {description}
        </div>
      </div>
    ))}
  </div>
);

type FlatComponentProps = FlatData;
const FlatComponent = ({ name, details, photos }: FlatComponentProps) => {
  const minPanelWidth = 400;
  return (
    <div
      {...css({
        display: "flex",
        flex: "1",
        flexDirection: "column",
      })}
    >
      <h3
        {...css({
          textAlign: "center",
          margin: "0",
          ...theme.sectionHeader,
        })}
      >
        {name}
      </h3>
      <div {...css({ display: "flex", flex: "1", flexWrap: "wrap" })}>
        <div
          {...css({
            display: "flex",
            flex: "1",
            minWidth: minPanelWidth,
            minHeight: "400px",
            padding: "0 2em 1em 0",
          })}
        >
          <FitToContainerSize>
            {(parentSize?: SizeType, childSize?: SizeType) =>
              parentSize &&
              <PhotoCarouselGallery
                componentSize={parentSize}
                photos={photos}
                proportionBetweenForegroundAndBackgroundPhotos={1.5}
                initialSelectedPhotoIndex={0}
              />
            }
          </FitToContainerSize>
        </div>
        <div
          {...css({
            display: "flex",
            flex: "1",
            minWidth: minPanelWidth,
            padding: "0 0 1em 2em",
          })}
        >
          <FlatDetails details={details} />
        </div>
      </div>
    </div>
  );
};

type FlatsPageProps = {
  flats?: FlatData[]
}
const FlatsPage = ({ flats = flatsData }: FlatsPageProps) => (
  <div
    {...css({
      display: "flex",
      flex: "1",
      flexDirection: "column",
      padding: "0 2em",
    })}
  >
    {flats.map((x, index) => (
      <div key={index} id={`flat-${index}`}>
        <FlatComponent {...x} />
      </div>
    ))}
  </div>
);

export { FlatsPage };
