import * as React from "react";
import { css } from "glamor";

const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197174.11559708885!2d20.74591879364372!3d49.509588086149215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dd6e5a6b6921d%3A0xf564f73a231be323!2sWysowa-Zdr%C3%B3j+78%2C+38-316+Wysowa-Zdr%C3%B3j!5e0!3m2!1spl!2spl!4v1460305383224";

export const LocalizationPage = () => (
  <div {...css({ width: "100%", padding: "2em 3%" })}>
    <iframe 
      src={mapSrc} 
      width="100%" 
      height="600px" 
    />
  </div>
);
