/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXT_PUBLIC_STRAPI_API: "http://localhost:1337"
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/posts',
                permanent: true,
            },
        ];
    },

};

module.exports = nextConfig;
