/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.consumeraffairs.com',
          port: '', // This can be left empty unless you need to specify a port
          pathname: '/**', // This pattern matches any path within the domain
        },
      ],
  },
};

export default nextConfig;
