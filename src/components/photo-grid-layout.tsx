import * as React from "react";
import ReactDOM from "react-dom";
import { css, keyframes } from "glamor";

import { VisibilitySensor } from "./../utils/components";
import { colorPallet } from "../theme";

type PhotoCellProps = {
  src: string;
  visible: boolean;
  padding: number;
  lastColumn: boolean;
  lastRow: boolean;
} & SizeType;

const PhotoCell = ({
  src,
  visible,
  width,
  height,
  padding,
  lastColumn,
  lastRow,
}: PhotoCellProps) => {
  return (
    <div
      {...css({
        width,
        height,
        boxSizing: "border-box",
        marginRight: !lastColumn ? padding : 0,
        marginBottom: !lastRow ? padding : 0,
      })}
    >
      <div
        {...css({
          width,
          height,
          transformStyle: "preserve-3d",
          transformOrigin: "0% 0%",
          opacity: 0,
          transform: "rotateX(-80deg)",
          animation: visible === true
            ? `${keyframes({
                "0%": {},
                "100%": { transform: "rotateX(0deg)", opacity: 1 },
              })} ${(Math.random() + 1) / 2}s ease-in-out both`
            : undefined,
        })}
      >
        <img
          {...css({ border: `solid 3px ${colorPallet.second}` })}
          src={src}
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};

type PhotoType = { src: string } & SizeType;
type PhotoGridLayoutProps = {
  photos: PhotoType[];
  photosInRowCount: number;
  containerWidth: number;
  paddingBetweenPhotos: number;
  direction: "horizontal" | "vertical";
};

export const PhotoGridLayout = ({
  photos,
  photosInRowCount,
  containerWidth,
  paddingBetweenPhotos,
  direction,
}: PhotoGridLayoutProps) => {
  const splitedPhotos = photos
    .map(({ src, width, height }) => ({
      src,
      aspectRatio: width / height,
    }))
    .splitEvery(
      direction === "horizontal"
        ? photosInRowCount
        : Math.ceil(photos.length / photosInRowCount),
    );
  const fittedPhotos = splitedPhotos.map(photos => {
    const missingPhotosRatio = photosInRowCount > photos.length
      ? photos[0].aspectRatio * (photosInRowCount - photos.length)
      : 0;
    const totalAspectRatio =
      photos.sum(x => x.aspectRatio) + missingPhotosRatio;
    const totalWidth =
      containerWidth - paddingBetweenPhotos * (photos.length - 1);
    const commonHeight = totalWidth / totalAspectRatio;
    const commonWidth = totalWidth / photosInRowCount;
    return photos.map(({ src, aspectRatio }) => ({
      src,
      width: direction === "horizontal"
        ? commonHeight * aspectRatio
        : commonWidth,
      height: direction === "horizontal"
        ? commonHeight
        : commonWidth / aspectRatio,
    }));
  });
  return (
    <div
      {...css({
        width: containerWidth,
        display: "flex",
        flexDirection: direction === "horizontal" ? "column" : "row",
        perspective: "1300px",
      })}
    >
      {fittedPhotos.map((photos, verticalIndex) =>
        <div
          key={verticalIndex}
          {...css({
            display: "flex",
            flexDirection: direction === "horizontal" ? "row" : "column",
          })}
        >
          {photos.map(({ src, width, height }, horizontalIndex) => {
            let wasVisible = false;
            return (
              <VisibilitySensor key={horizontalIndex} threshold={0.1}>
                {(visible: boolean) => {
                  if (visible) wasVisible = true;
                  const lastColumn = direction === "horizontal"
                    ? horizontalIndex === photos.length - 1
                    : verticalIndex === fittedPhotos.length - 1;
                  const lastRow = direction === "horizontal"
                    ? verticalIndex === fittedPhotos.length - 1
                    : horizontalIndex === photos.length - 1;
                  return (
                    <PhotoCell
                      src={src}
                      visible={wasVisible}
                      width={width}
                      height={height}
                      padding={paddingBetweenPhotos}
                      lastColumn={lastColumn}
                      lastRow={lastRow}
                    />
                  );
                }}
              </VisibilitySensor>
            );
          })}
        </div>,
      )}
    </div>
  );
};

type ResizablePhotoGridLayoutProps = {
  photos: PhotoType[];
  photosInRowCount: number;
  paddingBetweenPhotos: number;
  direction: "horizontal" | "vertical";
};
type ResizablePhotoGridLayoutState = {
  componentWidth: number;
};
export class ResizablePhotoGridLayout extends React.Component<
  ResizablePhotoGridLayoutProps,
  ResizablePhotoGridLayoutState
> {
  componentDidMount() {
    window.addEventListener("resize", this.updateSize);
    this.updateSize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
  }
  updateSize = () => {
    const element = ReactDOM.findDOMNode(this);
    const { width } = element.getBoundingClientRect();
    this.setState({ componentWidth: width });
  };
  render() {
    const { componentWidth } = this.state;
    return (
      <PhotoGridLayout
        direction={this.props.direction}
        paddingBetweenPhotos={this.props.paddingBetweenPhotos}
        photos={this.props.photos}
        photosInRowCount={this.props.photosInRowCount}
        containerWidth={componentWidth}
      />
    );
  }
}
