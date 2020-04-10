const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/User",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
