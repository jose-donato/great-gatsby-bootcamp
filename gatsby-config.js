module.exports = {
  siteMetadata: {
    title: "Personal Site",
    author: "José Donato"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    "gatsby-transformer-remark"
  ]
};
