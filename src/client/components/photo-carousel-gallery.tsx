import * as React from "react";
import { fitRectDimensions } from "./../../utils";
import * as List from "./../../utils/list";
import { css } from "glamor";
import { colorPallet } from "../theme";

type SizeType = { 
  width: number, 
  height: number 
}
type PhotoType = { src: string, size: SizeType }

type SinglePhotoProps = {
  scale: number,
  indexDistanceFromSelectedPhoto: number,
  onClick: () => void,
} & PhotoType

const SinglePhoto = ({ 
  src, 
  size, 
  scale, 
  indexDistanceFromSelectedPhoto,
  onClick ,
} : SinglePhotoProps
) => {
  const opacity = 
    indexDistanceFromSelectedPhoto === 0 ? 1 : 
    indexDistanceFromSelectedPhoto === 1 ? 0.9 : 
    0;
  const transformScale = 
    indexDistanceFromSelectedPhoto === 0 ? scale : 1;
  return (
    <img
      {...css({
        ...size,
        opacity,
        border: indexDistanceFromSelectedPhoto === 0 
          ? `solid 3px ${colorPallet.second}`
          : `solid 3px transparent`,
        zIndex: -indexDistanceFromSelectedPhoto,
        transform: `scale(${transformScale})`,
        transition: "transform 1s, z-index 1s, opacity 0.5s, border 0.5s",
      }) }
      onClick={onClick}
      src={src}
    />
  );
};

type CarouselProps = {
  photos: PhotoType[],
  currentIndex: number,
  containerSize: SizeType,
  scale: number,
  selectCurrent: () => void,
}
const Carousel = (
  {
    photos,
    currentIndex,
    containerSize,
    scale,
    selectCurrent,
  }: CarouselProps,
) => {
  
  const foregroundPhotoMaxDim = {
    width: containerSize.width * 0.8,
    height: containerSize.height,
  };
  const backgroundPhotoMaxDim = {
    width: foregroundPhotoMaxDim.width / scale,
    height: foregroundPhotoMaxDim.height / scale,
  };

  const backgroundPhotos = photos.map(({ src, size }) => ({
    src,
    size: fitRectDimensions(size, backgroundPhotoMaxDim),
  }));
  const currentPhoto = backgroundPhotos[currentIndex];

  const totalPhotosWidthToIndex = (index: number) => 
    backgroundPhotos
    .slice(0, index)
    .map(photo => photo.size.width)
    .reduce((sumWidth, photoWidth) => sumWidth + photoWidth, 0)

  const totalPhotosWidth = totalPhotosWidthToIndex(backgroundPhotos.length);
  const foregroundPhotoMargin = (containerSize.width - currentPhoto.size.width) / 2;
  const totalWidthToSelectedPhoto = totalPhotosWidthToIndex(currentIndex);
  const offset = -totalWidthToSelectedPhoto + foregroundPhotoMargin
  
  return (
    <div
      {...css({
        display: "flex",
        alignItems: "center",
        width: totalPhotosWidth,
        height: containerSize.height,
        transform: `translate(${offset}px,0px)`,
        transition: "transform 1s",
      }) }
    >
      {backgroundPhotos.map((photo, index) => (
        <SinglePhoto
          key={index}
          indexDistanceFromSelectedPhoto={Math.abs(currentIndex - index)}
          scale={scale}
          {...photo}
          onClick={index === currentIndex ? selectCurrent : () => { }}
        />
      ))}
    </div>
  );
};

type MoveButtonProps = { 
  onClick: () => void, 
  visible: boolean, 
  side: "left" | "right",
  width: string,
}
const MoveButton = ({ onClick, visible, side, width }: MoveButtonProps) => {
  
  const background = "rgba(255, 255, 255, 0.7)";
  const arrowColor = colorPallet.first; // "#666666";
  
  return (
    <div
      {...css({
        position: "absolute",
        width,
        height: "100%",
        top: 0,
        left: side === "left" ? 0 : undefined,
        right: side === "right" ? 0 : undefined,
        background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "transform 0.5s",
        transform: (
          visible ? "translate(0,0)" :
          side === "left" ? `translate(-${width},0)` :
          side === "right" ? `translate(${width}, 0)`
          : undefined
        ),
      }) }
      onClick={onClick}
    >
      <svg width="80%" height="100%" viewBox="-5 0 55 80">
        <polyline
          fill="none"
          stroke={arrowColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={
            side === "right"
              ? "0.375,0.375 45.63,38.087 0.375,75.8"
              : "45.63,0.375 0.375,38.087 45.63,75.8"
          }
        />
      </svg>
    </div>
  );
};

type PhotoCarouselGalleryProps = { 
  photos: PhotoType[], 
  initialSelectedPhotoIndex: number, 
  proportionBetweenForegroundAndBackgroundPhotos: number,
  componentSize: SizeType,
}
type PhotoCarouselGalleryState = { 
  currentIndex: number, 
  hovered: boolean,
}
export class PhotoCarouselGallery extends React.Component<PhotoCarouselGalleryProps, PhotoCarouselGalleryState> {
  
  static defaultProps: Partial<PhotoCarouselGalleryProps> = {
    photos: [],
    initialSelectedPhotoIndex: 0,
    proportionBetweenForegroundAndBackgroundPhotos: 1.5,
    componentSize: { width: 0, height: 0 },
  };

  _containerDiv?: HTMLDivElement = undefined;

  constructor(props: PhotoCarouselGalleryProps) {
    super(props);
    this.state = {
      currentIndex: props.initialSelectedPhotoIndex,
      hovered: false,
    };
  }

  selectPhoto = (index?: number) => () =>
      index !== undefined && this.setState({ currentIndex: index });
  
  render() {
    const { currentIndex, hovered } = this.state;
    const { photos, proportionBetweenForegroundAndBackgroundPhotos, componentSize } = this.props;

    const loop = false;
    const nextIndex = List.nextIndex(currentIndex, loop, photos);
    const previousIndex = List.prevIndex(currentIndex, loop, photos);
    const moveButtonWidth = "60px";

    return (
      <div 
        {...css({...componentSize, position: "relative", overflow: "hidden"})}
        onMouseEnter={() => { this.setState({hovered: true}) } }
        onMouseLeave={() => { this.setState({hovered: false})} }
      >
        <Carousel
          photos={photos}
          currentIndex={currentIndex}
          containerSize={componentSize}
          scale={proportionBetweenForegroundAndBackgroundPhotos}
          selectCurrent={() => { }}
        /> 
        <MoveButton
          visible={previousIndex !== undefined && hovered}
          side="left"
          width={moveButtonWidth}
          onClick={this.selectPhoto(previousIndex)}
        />
        <MoveButton
          visible={nextIndex !== undefined && hovered}
          side="right"
          width={moveButtonWidth}
          onClick={this.selectPhoto(nextIndex)}
        />
      </div>          
    );
  }
}
