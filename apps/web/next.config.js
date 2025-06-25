/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("../../.env") });

const nextConfig = {
    devIndicators: false,
    serverExternalPackages: [
        "@handleIt/db"
    ]
};

export default nextConfig;
