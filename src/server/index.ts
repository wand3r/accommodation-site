import { resolve } from "path";
import * as express from "express";
import * as compression from "compression";

import { generateManually as generateSitemap } from "./sitemap";
import * as template from "./template";
import "../utils/arrayExtensions";
import { pageForPathExists } from "../pages/index";

//Use env variable to set port in production to 80
const port = 3001;
const publicFolders = ["public", "build"];

const app = express();

app.use(compression());

publicFolders.forEach(folderName => {
  app.use(express.static(resolve(process.cwd(), folderName)));
});

app.get("/sitemap.xml", (req, res) => {
  console.log("Handling request for sitemap");
  generateSitemap(`${req.protocol}://${req.get("host")}`)
    .then(xml => {
      res.header("Content-Type", "application/xml").send(xml);
    })
    .catch(err => {
      console.log("Error during generating sitemap: %O", err);
      res.status(500).end();
    });
});

app.get("*", (req, res) => {
  console.log(`Handling request on server: ${req.url}`);

  const pathname = req.url;

  if (!pageForPathExists(pathname)) {
    res.redirect("/");
    return;
  }

  res.send(template.renderSSRPage(pathname));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});