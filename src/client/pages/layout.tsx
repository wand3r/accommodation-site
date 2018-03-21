import * as React from "react";
import { css, keyframes } from "glamor";

import { NavigationMenu } from "./navigation-menu";
import { PageType, matchPathsByFirstPart } from "./index";

const AnimatedPage = ({ children }: { children?: React.ReactNode }) => {
  const animationFrames = keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  });
  const animation = css({
    animation: `${animationFrames} 0.75s ease 0s both`,
  });
  return (
    <div {...css({ display: "flex", flex: 1 })} {...animation}>
      {children}
    </div>
  );
};

const Background = ({ children }: { children?: React.ReactNode }) =>
  <div
    {...css({
      flex: "1",
      background: `url("/photos/background-green-flower-1.jpg") center/cover no-repeat fixed`,
    })}
  >
    {children}
  </div>;

type HeaderProps = {
  pages: {
    title: string;
    pathname: string;
  }[];
  currentPathname: string;
};
const Header = ({ pages, currentPathname }: HeaderProps) =>
  <div {...css({ flex: 1 })}>
    <NavigationMenu pages={pages} currentPathname={currentPathname} />
  </div>;

type LayoutProps = {
  pages: PageType[];
  currentPathname: string;
};
export const Layout = ({ pages, currentPathname }: LayoutProps) => {
  const { page } =
    pages.find(page => matchPathsByFirstPart(currentPathname, page.pathname)) ||
    pages[0];
  return (
    <Background>
      <div {...css({ padding: "0.5em 0" })}>
        <Header pages={pages} currentPathname={currentPathname} />
      </div>
      <div {...css({ padding: "0 2em", display: "flex" })}>
        <AnimatedPage key={currentPathname}>
          {page(currentPathname)}
        </AnimatedPage>
      </div>
    </Background>
  );
};
