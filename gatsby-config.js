module.exports = {
  siteMetadata: {
    title: "DHIT",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "ELG97uCSlYl2UkWyfCUI8fD-C5rJf32hfISGJAWeSZQ",
        spaceId: "e3wmhi6ab24f",
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-VW12FZ3LLT",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
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
