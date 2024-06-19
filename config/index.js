const dev = process.env.NODE_ENV !== "production";

export const server = dev
    ? "https://afreebmart.com/api"
    : "https://afreebmart.com/api";
