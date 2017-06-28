import * as SitemapGenerator from "sitemap-generator";
import * as sitemapLib from "sitemap";
import { pages } from "../pages";
import { galleryData } from "../pages/gallery-data";

type GeneratorType = "dynamic" | "manual-lib" | "manual";
type Generator = (hostname: string) => Promise<string>;

//https://www.npmjs.com/package/sitemap-generator
const generateDynamicallyFromUrl: Generator = (url: string) =>
  new Promise<string>((resolve, reject) => {
    const generator = new SitemapGenerator(url);
    generator.on("done", (sitemaps: string[]) => resolve(sitemaps[0]));
    generator.on("error", error => reject(error));
    generator.on("clienterror", error => reject(error));
    generator.start();
  });

const staticPagesConfiguration = () => [
  ...pages.map(({ pathname: url }) => ({
    url,
    changefreq: "monthly",
    priority: url.length > 1 ? 0.8 : 1,
  })),
  ...galleryData.map(({ id }) => ({
    url: `/galeria/${id}`,
    changefreq: "monthly",
    priority: 0.64,
  })),
];

//https://www.npmjs.com/package/sitemap
const generateManuallyWithLibrary: Generator = hostname =>
  new Promise<string>((resolve, reject) =>
    sitemapLib
      .createSitemap({
        cacheTime: 600000,
        hostname,
        urls: staticPagesConfiguration(),
      })
      .toXML((err, xml) => {
        if (err) reject(err);
        else resolve(xml);
      }),
  );

const generateManually: Generator = hostname =>
  Promise.resolve<string>(
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
      "<urlset " +
      'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ' +
      'xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" ' +
      'xmlns:xhtml="http://www.w3.org/1999/xhtml" ' +
      'xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" ' +
      'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" ' +
      'xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n' +
      staticPagesConfiguration()
        .map(
          ({ url, changefreq, priority }) =>
            `\t<url>\n` +
            `\t\t<loc>${hostname}${url}</loc>\n` +
            `\t\t<changefreq>${changefreq}</changefreq>\n` +
            `\t\t<priority>${priority}</priority>\n` +
            `\t</url>\n`,
        )
        .join("") +
      "</urlset>",
  );

export {
  generateDynamicallyFromUrl,
  generateManuallyWithLibrary,
  generateManually,
};
