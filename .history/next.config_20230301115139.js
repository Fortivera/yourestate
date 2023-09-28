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
        destination: "https://jsonplaceholder.typicode.com/users",
      },
    ]
  }
  return {
    rewrites,
  }
}
