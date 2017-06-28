import * as React from "react";
import { css } from "glamor";

type CssSize = {
  width: CssLength,
  height: CssLength,
}

type CenterDecoratorProps = {
  size: Partial<CssSize>
  children?: React.ReactNode
}

const CenterDecorator = ({ size, children }: CenterDecoratorProps) => (
  <div {...css({
      display: "flex",
      border: "2px dashed red",
      margin: "100px auto",
      ...size,
    })}>
    {children}
  </div>
);

export { CenterDecorator }