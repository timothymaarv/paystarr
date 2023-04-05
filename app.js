import dotenv from "dotenv";
import errorhandler from "errorhandler";
import express from "express";
import path from "path";
import PrismicDOM from "prismic-dom";
import * as prismicH from "@prismicio/helpers";
import morgan from "morgan";
import { homeRoute } from "./controller/routes.js";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use("/public", express.static("public"));
app.use(errorhandler());
app.use(express.json({ extended: false }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
  };

  res.locals.PrismicDOM = PrismicDOM;

  next();
});

app.get("/", homeRoute);

app.listen(PORT, () => {
  console.log("listening at PORT", PORT);
});
