import React from "react";
import { css } from "glamor";

type Props = {
  imgSrc: string,
  imgSize: "auto" | "cover" | "contain" | string,
} &  Partial<React.HTMLProps<HTMLDivElement>>

export const DivImg: React.SFC<Props> = ({ 
  imgSrc, 
  imgSize, 
  ...other 
}) => (
  <div
    {...css({ background: `url(${imgSrc}) center / ${imgSize} no-repeat` })}
    {...other}
  />
);