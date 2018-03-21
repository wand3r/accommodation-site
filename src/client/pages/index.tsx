import * as React from "react";

import { FlatsPage } from "./flats-page";
import { AttractionsPage } from "../pages/attractions-page";
import { LocalizationPage } from "../pages/localization-page";
import { ContactPage } from "../pages/contact-page";
import { AboutUsPage } from "../pages/about-us-page";
import { GalleryPage } from "./gallery-page-v2";
import { galleryData } from "./gallery-data";

export type PageType = {
  title: string;
  pathname: string;
  page: (path: string) => JSX.Element;
};
export const pages: PageType[] = [
  {
    title: "O nas",
    pathname: "/",
    page: () => <AboutUsPage />,
  },
  {
    title: "Mieszkania",
    pathname: "/mieszkania",
    page: () => <FlatsPage />,
  },
  {
    title: "Atrakcje",
    pathname: "/atrakcje",
    page: () => <AttractionsPage />,
  },
  {
    title: "Galeria",
    pathname: "/galeria",
    page: (path: string) =>
      <GalleryPage
        sections={galleryData}
        path={path.replace("/galeria", "")}
      />,
  },
  {
    title: "Lokalizacja",
    pathname: "/lokalizacja",
    page: () => <LocalizationPage />,
  },
  {
    title: "Kontakt",
    pathname: "/kontakt",
    page: () => <ContactPage />,
  },
];

export const matchPathsByFirstPart = (
  path1: string,
  path2: string,
): boolean => {
  const pathFirstPart = (path: string) => path.split("/")[1];
  return pathFirstPart(path1) === pathFirstPart(path2);
};

export const pageForPathExists = (pathToFind: string): boolean => {
  return (
    pages.find(({ pathname }) => matchPathsByFirstPart(pathToFind, pathname)) !=
    undefined
  );
};
