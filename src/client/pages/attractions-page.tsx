import * as React from "react";
import { css } from "glamor";
import { theme, colorPallet } from "../theme";
import { data } from "./attractions-data";
import { ProportionalDiv } from "../components/proportional-div";
import { DivImg } from "../components/div-img";

type AttractionsPageProps = {
  attractions?: {
    name: string;
    description: string;
    photoSrc: string;
  }[];
};
export const AttractionsPage = ({ attractions = data }: AttractionsPageProps) =>
  <div
    {...css({
      width: "100%",
      display: "flex",
      flexWrap: "wrap"
    })}
  >
    {attractions.map((attraction, index) =>
      <ProportionalDiv
        key={index}
        {...css({
          "@media(min-width: 1px)": {
            flex: "0 0 100%"
          },
          "@media(min-width: 800px)": {
            flex: "0 0 50%"
          },
          "@media(min-width: 1600px)": {
            flex: "0 0 33%"
          },
          "@media(min-width: 2000px)": {
            flex: "0 0 25%"
          }
        })}
      >
        <AttractionAnime {...attraction} />
      </ProportionalDiv>
    )}
  </div>;

type AttractionAnimeProps = {
  name: string;
  description: string;
  photoSrc: string;
} & Partial<React.HTMLProps<HTMLDivElement>>;
type AttractionAnimeState = {
  hovered: boolean;
};
export class AttractionAnime extends React.Component<
  AttractionAnimeProps,
  AttractionAnimeState
> {
  state = { hovered: false };
  render() {
    const { hovered } = this.state;
    return (
      <div
        {...css({
          display: "flex",
          margin: "5%",
          flex: 1,
          cursor: "pointer"
        })}
        onClick={() => {
          this.setState(prevState => ({ hovered: !prevState.hovered }));
        }}
      >
        <Attraction {...this.props} hovered={hovered} />
      </div>
    );
  }
}

//TODO: extract reusable component ImgWithDescOnHover
type AttractionProps = {
  name: string;
  description: string;
  photoSrc: string;
  hovered: boolean;
} & Partial<React.HTMLProps<HTMLDivElement>>;
export const Attraction = ({
  name,
  description,
  photoSrc,
  hovered
}: AttractionProps) => {
  const headerSize = 15;
  return (
    <div
      {...css({
        position: "relative",
        border: `solid 3px ${colorPallet.second}`,
        flex: 1,
        overflow: "hidden"
      })}
    >
      <DivImg
        {...css({
          height: "100%"
        })}
        imgSrc={photoSrc}
        imgSize="cover"
      />
      <div
        {...css({
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
          transform: `translateY(${hovered ? 0 : 100 - headerSize}%)`,
          background: "rgba(255,255,255,0.8)",
          transition: "transform 0.75s"
        })}
      >
        <div
          {...css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: `${headerSize}%`
          })}
        >
          <h4
            {...css({
              ...theme.sectionHeader
            })}
          >
            {name}
          </h4>
        </div>
        <p
          {...css({
            ...theme.standardText,
            padding: "1em",
            textAlign: "center"
          })}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
