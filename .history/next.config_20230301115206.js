/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/cats",
        destination: "https://localhost:7227/api/Properties",
      },
    ]
  }
  return {
    rewrites,
  }
}
