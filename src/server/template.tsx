import * as React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { renderStatic } from "glamor-server";

import { App } from "../client/app";

type TemplateProps = {
  pathname: string;
};
const SSRPageTemplate = ({ pathname }: TemplateProps) => {
  const { html: appMarkup, css, ids } = renderStatic(() => {
    return renderToString(<App pathname={pathname} />);
  });
  const injectIds = `window.__glam = ${JSON.stringify(ids)}`;
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Wysowa-Zdrój noclegi i agroturystyka"
        />
        <title>U Karasiów</title>
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: appMarkup }} />
        <script dangerouslySetInnerHTML={{ __html: injectIds }} />
        <script type="text/javascript" src="/app.js" />
      </body>
    </html>
  );
};

const PurePageTemplate = () => {
  return (
    <html>
      <head>
        <title>U Karasiów</title>
      </head>
      <body>
        <div id="app" />
        <script type="text/javascript" src="/app.js" />
      </body>
    </html>
  );
};

export const renderSSRPage = (pathname: string) => `
  <!DOCTYPE html>
  ${renderToStaticMarkup(<SSRPageTemplate pathname={pathname} />)}
`;

export const renderPurePage = () => `
  <!DOCTYPE html>
  ${renderToStaticMarkup(<PurePageTemplate />)}
`;
