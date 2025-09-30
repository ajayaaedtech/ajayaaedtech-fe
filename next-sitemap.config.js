/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ajayaaedtech.com',
  generateRobotsTxt: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // **disable the Host line**
    additionalSitemaps: [], // leave empty
    // This tells next-sitemap to NOT include Host
    host: undefined,
  },
};
