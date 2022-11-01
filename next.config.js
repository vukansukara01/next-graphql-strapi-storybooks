/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
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
