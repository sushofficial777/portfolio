/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['gsap']); // Replace 'module-name' with the actual name of the module causing the issue

const path = require('path');

module.exports = withTM({
  webpack: (config, { isServer }) => {
    // Additional webpack configurations if needed

    // This is necessary for handling server-side imports
   
    return config;
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'images.pexels.com'],
   
}
});