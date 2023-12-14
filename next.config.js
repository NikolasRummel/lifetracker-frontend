/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nikolas-rummel.de',
            },
            {
                protocol: 'https',
                hostname: 'openweathermap.org',
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
            },
        ],
    },
}

module.exports = nextConfig
