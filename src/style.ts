import { css, fontFace } from "glamor";

export type CustomFontFamily = "Mostwasted" | "Roboto" | "ScriptianPro" | "odstemplik";

export const addCustomFonts = () => {
  fontFace({
    fontFamily: "Mostwasted",
    fontStyle: "normal",
    fontWeight: 400,
    src: "url(/fonts/Mostwasted.ttf)",
  });

  fontFace({
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    src: "url(/fonts/Roboto-Medium.ttf)",
  })

  fontFace({
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "lighter",
    src: "url(/fonts/Roboto-Light.ttf)",
  })

  fontFace({
    fontFamily: "ScriptinaPro",
    fontStyle: "normal",
    fontWeight: 400,
    src: "url(/fonts/ScriptinaPro.otf)",
  })

  fontFace({
    fontFamily: "odstemplik",
    fontStyle: "normal",
    fontWeight: "normal",
    src: 'url(/fonts/odstemplik.ttf)',
  })
  fontFace({
    fontFamily: "odstemplik",
    fontStyle: "normal",
    fontWeight: "bold",
    src: 'url(/fonts/odstemplikBold.ttf)',
  })
}
export const applayBorderBoxSizingToAllElements = () => {
  css.global("html, body", {
    boxSizing: "border-box",
  });

  css.global("*, *:before, *:after", {
    boxSizing: "inherit",
  })  
}
export const stretchPageToWindowSize = () => {
  css.global("html, body", {
    height: "100%",
    margin: "0",
  });

  css.global("#app", {
    display: "flex",
    minHeight: "100%",
  });
}

export const applyGlobalStyle = () => {
  require("glamor-reset");
  addCustomFonts();
  applayBorderBoxSizingToAllElements();
  stretchPageToWindowSize();
}

