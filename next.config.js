/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  eslint: {
    dirs: ["pages", "features", "core", "resources", "scripts"],
  },
};
