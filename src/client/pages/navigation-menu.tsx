import * as React from "react";
import { css } from "glamor";

import { theme } from "./../theme";
import { pushState } from "../../utils/history";
import { matchPathsByFirstPart } from "./index";

type LinkProps = {
  href: string,
  style?: any,
  children?: React.ReactNode,
}
export const Link = ({href, style, children}: LinkProps) => {
  const aTagReset = {
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
  };
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const aNewTab = e.metaKey || e.ctrlKey;
    const anExternalLink = href.indexOf("http") === 0;
    if (aNewTab || anExternalLink) return;
    e.preventDefault();
    pushState(href);
  }
  return (
    <a 
      {...css(aTagReset)} 
      {...style}
      href={href} 
      onClick={onClick}
    >
      {children}
    </a>
  )
}


type NavigationMenuItemProps = {
  title: string,
  hash: string,
  selected: boolean,
}
const NavigationMenuItem = ({ title, hash, selected }: NavigationMenuItemProps) => {

  const pseudoElementStyle = (selected: boolean, dir: "before" | "after") => ({
    position: "absolute",
    left: "0",
    top: dir === "before" ? "0" : undefined,
    bottom: dir === "after" ? "0" : undefined,
    width: "100%",
    height: "2px",
    background: theme.navigationMenu.color,
    content: `""`,
    opacity: !selected ? 0 : 1,
    transition: "opacity 0.3s, transform 0.3s",
    transform: selected
      ? "translateY(0px)"
      : dir === "before" ? "translateY(-10px)" : "translateY(10px)",
  });

  const finalStyle = (selected: boolean) => ({
    ...theme.navigationMenu,
    position: "relative",
    padding: "0.2em 1em",
    margin: "0.2em 0em",
    opacity: selected ? 1 : 0.7,
    transition: "opacity 0.5s",
    ":hover": { opacity: 1 },
    ":before": pseudoElementStyle(selected, "before"),
    ":after": pseudoElementStyle(selected, "after"),
    ":hover::before": pseudoElementStyle(true, "before"),
    ":hover::after": pseudoElementStyle(true, "after"),
  });

  return (
    <Link href={hash}>
      <div {...css(finalStyle(selected))}>
        {title}
      </div>
    </Link>
  );
};

type NavigationMenuType = {
  pages: {
    title: string,
    pathname: string,
  }[],
  currentPathname: string,
}
export const NavigationMenu = ({ pages, currentPathname }: NavigationMenuType) => {

  return (
    <nav
      {...css({
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      })}
    >
      {pages.map(({ title, pathname }, index) => (
        <NavigationMenuItem
          key={index}
          title={title}
          hash={pathname}
          selected={matchPathsByFirstPart(currentPathname, pathname)}
        />
      ))}
    </nav>
  );
}