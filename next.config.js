/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'jeffrey-food-image.s3.us-west-2.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };

