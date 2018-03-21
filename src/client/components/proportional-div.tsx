import * as React from "react";
import * as ReactDOM from "react-dom";
import { css } from "glamor";

//http://www.mademyday.de/css-height-equals-width-with-pure-css.html
type Props = {
  heightRatio?: number,
  children?: React.ReactNode,
} & Partial<React.HTMLProps<HTMLDivElement>>

export const ProportionalDiv: React.SFC<Props> = ({ 
  heightRatio = 1, 
  children, 
  ...other, 
}) => (
  <div {...css({
      position: "relative",
      ":before": {
        content: '""',
        display: "block",
        paddingTop: `${heightRatio * 100}%`,
      },
    })} {...other}>
    <div {...css({
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
      })}>
      {children}
    </div>
  </div>
);