import * as React from "react";
import { css } from "glamor";

import { HoverablePhotoStack as PhotoStack } from "../components/photo-stack";
import { galleryData } from "./gallery-data";
import { ProportionalDiv } from "../utils/components";
import { PhotoGridLayout } from "../components/photo-grid-layout";
import { throttle } from "../utils/index";
import { Link } from "./navigation-menu";
import { theme } from "../theme";

type GallerySection = {
  id: string,
  name: string,
  photos: ({
    src: string,
  } & SizeType)[],
}

type SelectionViewProps = {
  sections: GallerySection[],
}


const SelectionView = ({ sections = galleryData } : Partial<SelectionViewProps>) => (
  <div {...css({
    display: "flex",
    flex: "1",
    margin: "0 0%",
    flexWrap: "wrap",
  })}>
    {sections.map(({id, name, photos}, i) => (
      <ProportionalDiv
        key={i} 
        heightRatio={1} 
        {...css({
          "@media(max-width: 799px)" : {
            flex: "0 0 50%",
          },
          "@media(min-width: 800px) and (max-width: 1199px)" : {
            flex: "0 0 33%",
          },
          "@media(min-width: 1200px)" : {
            flex: "0 0 25%",
          },
        })}
      >
        <div {...css({
          flex: "1", 
          display: "flex", 
          flexDirection: "column", 
          margin: "10% 10% 0 10%",
        })}>
          <Link
            href={`/galeria/${id}`} 
            style={css({cursor: "pointer", flex: 1, display: "flex"})}
          >
            <PhotoStack 
              effect="randomRotation"
              images={photos}
            />
          </Link>
          <p {...css({
            ...theme.sectionHeader,
            textAlign: "center", 
            margin: "0.5em 0 0 0", 
          })}>
            {name}
          </p>
        </div>
      </ProportionalDiv>
    ))}
  </div>
);

type SectionViewProps = GallerySection
type SectionViewState = {
  width?: number,
}
class SectionView extends React.Component<SectionViewProps, SectionViewState> {
   div: HTMLDivElement;
   state: SectionViewState = {
     width: undefined,
   }

   constructor(props: SectionViewProps) {
     super(props);
   }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = throttle(() => {
    this.setState(prevState => ({
      width: this.div.getBoundingClientRect().width,
    }));
  }, 100)

  render() {
    const width= this.state.width || 800;
    const { photos } = this.props;
    const photosInRow = Math.ceil((width || 0) / 700);
    return (
      <div 
        ref={c => this.div = c}
        {...css({display: "flex", flex: 1, margin: "50px"})}
      >
      { 
        <PhotoGridLayout
          direction={"horizontal"}
          photos={photos}
          photosInRowCount={photosInRow} 
          paddingBetweenPhotos={photosInRow * 8}
          containerWidth={width}
        />
      }
      </div>
    )
  }
}

type GalleryPageProps = {
  sections: GallerySection[],
  path: string,
}
type GalleryPageState = {
  selectedSectionId: string | undefined,
}
class GalleryPage extends React.Component<GalleryPageProps, GalleryPageState> {
  static defaultProps = {
    sections: galleryData,
  }

  constructor(props: GalleryPageProps) {
    super(props);
    this.state = {
      selectedSectionId: props.path,
    }
  }
  render() {
    const { sections } = this.props;
    const selectedSection = sections.find(x => this.state.selectedSectionId === `/${x.id}`); 
    return (
      <div {...css({display: "flex", flex: 1})}>
      { selectedSection === undefined &&
        <SelectionView sections={sections} />}
      { selectedSection !== undefined  &&
        <SectionView {...selectedSection} />}
      </div>
    )
  }
}

export { GalleryPage, SelectionView, SectionView };