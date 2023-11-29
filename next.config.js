/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nikolas-rummel.de',
            },
        ],
    },
}

module.exports = nextConfig
