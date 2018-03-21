import * as React from "react";
import { css } from "glamor";
import { theme } from "../theme";
import { DivImg } from "../components/div-img";

export const AboutUsPage = () =>
  <div {...css({ textAlign: "center" })}>
    <h1 {...css({ ...theme.pageHeader })}>
      Gospodarstwo agroturystyczne "U Karasiów"
    </h1>
    <div
      {...css({
        padding: "0 5%",
        ...theme.standardText,
      })}
    >
      <DivImg
        {...css({ height: "400px" })}
        imgSize="contain"
        imgSrc="/photos/frontpage-backyard-2-small.jpg"
      />
      <p>
        Nasze gospodarstwo znajduje się w przysiółku Huta Wysowska, oddalonym 2
        km od uzdrowiska Wysowa-Zdrój, z dala od ruchu i tłumów wczasowiczów.
      </p>
      <p>
        U nas odnajdą Państwo upragniony spokoju i błogą ciszę, przerywaną
        jedynie odgłosami natury. Wokół panuje wszechobecna zieleń nienaruszonej
        przez ludzką ręką przyrody. O jej wyjątkowości może świadczyć to z jaką
        łatwością można tutaj spotkać rzadkie zwierzęta, takie jak chociażby
        bobry, które zbudowały niedaleko nas tamę oraz ściśle chroniony bocian
        czarny. Spośród roślin można natknąć się na dziewięcisił, czy też
        nadobnicę alpejską.
      </p>
      <p>
        Zewsząd otaczają nas łąki, lasy oraz góry Beskidu Niskiego, które
        zachęcają do aktywnego wypoczynku i pieszych wędrówek, zarówno tych
        krótkich, po okolicznych lasach w poszukiwaniu grzybów i owoców leśnych,
        jak i tych dłuższych mających na celu zdobycie szczytu jednej z
        pobliskich gór.
      </p>
      <p>
        Zapraszamy do zapoznania się z naszą ofertą.
      </p>
    </div>
  </div>;

const fun = () => <div><p>lol</p>lol</div>;
