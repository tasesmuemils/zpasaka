module.exports = {
  siteMetadata: {
    title: `Zeltābeles pasaka`,
    siteUrl: `https://www.zpasaka.lv`,
    description: `Bērnudārzs "Zeltābeles pasaka"`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
