import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";
dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ギャラリーアオイ`,
    description: `ギャラリーアオイは展示会やワークショップに最適なレンタルギャラリーです。`,
    siteUrl: `https://www.gallery-aoi.jp`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: "galleryaoi",
        apis: [
          {
            endpoint: "news",
          },
          {
            endpoint: "reservations",
          },
          {
            endpoint: "event",
          },
          { endpoint: "news-category" },
          { endpoint: "event-category" },
        ],
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
