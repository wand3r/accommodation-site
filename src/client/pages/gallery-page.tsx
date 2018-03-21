import * as React from "react";
import { css } from "glamor";
import { PhotoGridLayout } from "./../components/photo-grid-layout";
import { FitToContainerSize } from "./../components/fit-to-container-size";
import { theme } from "./../theme";
import { galleryData, GalleryData, GalleryPhoto } from "./gallery-data";

//TODO: extract SectionsContainer, Section, SectionHeader component and reuse it in flats-page
type GallerySectionProps = {
  name: string
  photos: GalleryPhoto[]
}
const GallerySection = ({ 
  name, 
  photos 
} : GallerySectionProps) => {
  const maxPhotoWidth = 600;
  return (
    <div {...css({ display: "flex", flexDirection: "column" })}>
      <div>
        <h3
          {...css({
            textAlign: "center",
            margin: "0",
            ...theme.pageHeader,
          })}
        >
          {name}
        </h3>
      </div>
      <div>
        <FitToContainerSize>
          {(parentSize?: SizeType, childSize?: SizeType) => {
            return (
              parentSize &&
              <PhotoGridLayout
                photos={photos}
                paddingBetweenPhotos={parentSize.width * 0.01}
                photosInRowCount={Math.ceil(
                  (parentSize.width) / maxPhotoWidth,
                )}
                containerWidth={parentSize.width}
                direction="horizontal"
              />
          )}}
        </FitToContainerSize>
      </div>
    </div>
  );
};

type GalleryPageProps = { 
  sections?: GalleryData[]
}
const GalleryPage = ({ 
  sections = galleryData 
} : GalleryPageProps) => {
  return (
    <div
      {...css({
        flex: "1",
        display: "flex",
        flexDirection: "column",
        margin: "0 3%",
      })}
    >
      {sections.map(({ name, photos }, index) => (
        <div
          key={index}
          id={`gallery-${index}`}
          {...css({ padding: "1em 0" })}
        >
          <GallerySection name={name} photos={photos} />
        </div>
      ))}
    </div>
  );
};

export { GalleryPage };
