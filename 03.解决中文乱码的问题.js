const http = require("http");
const server = http.createServer();
server.on("request", function(req, res) {
    const str = '您请求的是' + req.url + '您请求的方法' + req.method;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(str);
})
server.listen(80, () => function() {
    console.log("server running at http://127.0.0.1");
})