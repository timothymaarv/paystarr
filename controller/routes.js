import { client } from "../config/prismicConfig.js";

export const homeRoute = async (req, res) => {
  const home = await client.getSingle("home");

  const body = home.data.body;

  res.render("pages/home", { home });
};
