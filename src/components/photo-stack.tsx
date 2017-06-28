import * as React from "react";
import { css } from "glamor";
import * as ReactDOM from "react-dom";
import { colorPallet } from "../theme";

type Effect = {
  requiredImagesCount: number,
  passiveStyle: (imgIndex: number) => Object,
  activeStyle: (imgIndex: number) => Object,
}

const randomRotation: Effect = {
  requiredImagesCount: 4,
  passiveStyle: (imgIndex: number) => ({
    transform: 
      imgIndex === 0 ? "rotate(-2deg)" :
      imgIndex === 1 ? "rotate(3deg)" : 
      imgIndex === 2 ? "rotate(1.5deg)" : 
      imgIndex === 3 ? "translate(1%,1%)" :
      undefined, 
  }),
  activeStyle: (imgIndex: number) => ({
    transform: 
      imgIndex === 0 ? "rotate(-8deg)" :
      imgIndex === 1 ? "rotate(12deg)" : 
      imgIndex === 2 ? "rotate(6deg)" : 
      imgIndex === 3 ? "translate(5%,5%)" :
      undefined, 
  })
}

const fan: Effect = {
  requiredImagesCount: 4,
  passiveStyle: (imgIndex: number) => ({
    transformOrigin: "0% 0%",
  }),
  activeStyle: (imgIndex: number) => ({
    transform: 
      imgIndex === 1 ? "rotate(5deg)" :
      imgIndex === 2 ? "rotate(10deg)" :
      imgIndex === 3 ? "rotate(15deg)" :
      undefined,
    transitionDelay:
      imgIndex === 1 ? "0.1s" :
      imgIndex === 2 ? "0.05s" :
      undefined,
  }),
}

const peekBoo: Effect = {
  requiredImagesCount: 4,
  passiveStyle: (imgIndex: number) => ({
    transform: imgIndex !== 3 ? "scale(0.5)" : undefined,
    transformOrigin: imgIndex === 3 ? "50% 100%" : undefined,
  }),
  activeStyle: (imgIndex: number) => ({
    transform: 
      imgIndex === 0 ? "scale(0.5) translate(50%,-50%) rotate(15deg)" :
      imgIndex === 1 ? "scale(0.5) translate(0,-50%)" :
      imgIndex === 2 ? "scale(0.5) translate(-50%,-50%) rotate(-15deg)" :
      imgIndex === 3 ? "scale(0.9)" :
      undefined,
  }),
}

type EffectType = "randomRotation" | "fan" | "peekBoo";
const effects: { [P in EffectType] : Effect } = {
  randomRotation,
  fan,
  peekBoo, 
}

type PhotoStackProps = {
  images: { src: string }[],
  effect: EffectType,
  animationTimeInSec?: number,
}
export const PhotoStack = ({ 
  images, 
  active, 
  effect, 
  animationTimeInSec = 0.5
}: PhotoStackProps & { active: boolean }) => {
  const { requiredImagesCount, activeStyle, passiveStyle } = effects[effect];
  if (images.length < requiredImagesCount)
    throw new Error("PhotoStack Component");
  const requiredImages = images.slice(0, requiredImagesCount);
  return (
    <div {...css({
      position: "relative",
      width: "100%",
      height: "100%",
      flex: 1,
    })}>
      {requiredImages.map(({src}, i, arr) => 
        <div
          {...css({
            background: `url(${src}) center / cover no-repeat`,
            border: `2px solid ${colorPallet.second}`,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            maxWidth: "100%",
            transition: `all ${animationTimeInSec}s`,
            position: i < arr.length - 1 ? "absolute" : "relative",
            ...passiveStyle(i),
            ...(active ? activeStyle(i) : {})
          })} 
          key={i}
        />
      )}
    </div>
  )
}

export class HoverablePhotoStack extends React.Component<PhotoStackProps, { hovered: boolean }> {
  state = {
    hovered: false,
  }
  onMouseEnter = () => this.setState({hovered: true})
  onMouseLeave = () => this.setState({hovered: false})
  componentDidMount() {
    const domNode = ReactDOM.findDOMNode(this);
    domNode.addEventListener("mouseenter", this.onMouseEnter);
    domNode.addEventListener("mouseleave", this.onMouseLeave);
  }
  componentWillUnmount() {
    const domNode = ReactDOM.findDOMNode(this);
    domNode.removeEventListener("mouseenter", this.onMouseEnter);
    domNode.removeEventListener("mouseleave", this.onMouseLeave);
  }
  render() {
    return (
      <PhotoStack 
        images={this.props.images}
        animationTimeInSec={this.props.animationTimeInSec} 
        effect={this.props.effect}
        active={this.state.hovered} 
      />
    )
  }
}