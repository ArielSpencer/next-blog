/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.arielspencer.com.br',
      },
      {
        protocol: 'https',
        hostname: 'bucket-r2-img-blog.3afff89ea0a87e47800d85343e606736.r2.cloudflarestorage.com',
      },
    ],
  },
};

export default nextConfig;
