export const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app: any) {
    app.use(
        "/api",
        createProxyMiddleware({
            // target: "http://localhost:3002",
            target: "/",
            changeOrigin: true,
            secure: false,
            logLevel: "info",
            timeout: 40000,
        })
    );
};
