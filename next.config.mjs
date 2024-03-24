/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["preshyjonesbucket.s3.eu-west-1.amazonaws.com", "randomuser.me"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     domain: "preshyjonesbucket.s3.eu-west-1.amazonaws.com",
    //     port:"",

    //   },
    // ],
  },
};

export default nextConfig;
