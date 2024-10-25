/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'utaboiwoepvwdhnczsgd.supabase.co',
            },
        ],
        unoptimized: true,
    },
};

export default nextConfig;
