const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy('/auth/facebook', { target: 'http://localhost:3000/' }));
};

