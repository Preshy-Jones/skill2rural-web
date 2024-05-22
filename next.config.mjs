/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "preshyjonesbucket.s3.eu-west-1.amazonaws.com",
      "randomuser.me",
      "upload.wikimedia.org",
      "i.ytimg.com",
      "img.jakpost.net",
      "commondatastorage.googleapis.com",
      "skill2rural.s3.eu-north-1.amazonaws.com",
    ],
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
