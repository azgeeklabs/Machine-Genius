import { withNextVideo } from "next-video/process";
/** 
 * @type {import('next').NextConfig} 
 * 
 */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true }
};

export default withNextVideo(nextConfig);