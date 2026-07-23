// /** @type {import("next").NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   turbopack: {
//     root: ".",
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "./",
  basePath: "",
  reactStrictMode: true,
  // 腾讯云托管额外配置，放行静态资源转发
  output: "standalone"
};

export default nextConfig;
