/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config, { isServer, nextRuntime, webpack }) {
    config.module.rules.push({
      test: /\.svg$/i,
      loader: "@svgr/webpack",
      options: {
        icon: true,
        expandProps: "end",
        titleProp: true,
      },
    });
    if (isServer && nextRuntime === "nodejs")
      config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ }));
    return config;
  },
};

export default nextConfig;
