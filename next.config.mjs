// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Build करते समय ESLint errors को ignore करेगा (Vercel पर helpful)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
