const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "false",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true, // เปิดการใช้งาน React Strict Mode
  compiler: {
    styledComponents: true, // ถ้าคุณใช้ styled-components
  },
});
