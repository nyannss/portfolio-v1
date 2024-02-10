/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "media.licdn.com"
            },
            {
                hostname: "github.com"
            },
        ]
    }
};

export default nextConfig;
