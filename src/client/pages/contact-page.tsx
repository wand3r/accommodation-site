import * as React from "react";
import { css } from "glamor";
import { theme } from "../theme";

const addressTextStyle = css({ margin: 0, ...theme.standardText });

export const ContactPage = () => (
  <div {...css({
      margin: "auto",
      padding: "2em",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    })}>
    <h3 {...css({ ...theme.standardTextHeader, paddingBottom: "0.3em" })}>
      Nasze gospodarstwo znajduje się po adresem
    </h3>
    <p {...addressTextStyle}>38-316 Wysowa-Zdrój</p>
    <p {...addressTextStyle}>Wysowa-Zdrój 78</p>
    <div {...css({ height: "2em" })} />
    <h3 {...css({ ...theme.standardTextHeader, paddingBottom: "0.3em" })}>
      Prosimy o kontakt telefoniczny pod jeden z podanych poniżej numerów
    </h3>
    <p {...addressTextStyle}>798 577 283</p>
    <p {...addressTextStyle}>784 043 777</p>
    <p {...addressTextStyle}>18 35 32 160</p>
  </div>
);
