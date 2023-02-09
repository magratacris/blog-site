/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    const devPhase = {
      reactStrictMode: true,
      env: {
        mongodb_username: "crispogi",
        mongodb_password: "crispogi23magrata",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog-site-dev",
      },
    };
    return devPhase;
  }
  const buildPhase = {
    reactStrictMode: true,
    env: {
      mongodb_username: "crispogi",
      mongodb_password: "crispogi23magrata",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog-site",
    },
  };
  return buildPhase;
};
