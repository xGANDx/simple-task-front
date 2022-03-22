/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: process.env.NODE_ENV == "production" ? "https://simple-task-apii.herokuapp.com" : "http://localhost:3001"
  }
}

module.exports = nextConfig
