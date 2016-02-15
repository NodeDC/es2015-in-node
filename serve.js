"use strict";
const http = require("http");

module.exports = function (html, cb) {
	http.createServer(function (req, res) {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(html);
	}).listen(function () {
		const port = this.address().port;
		console.log(`Server listening on localhost:${port}`); // eslint-disable-line no-console
		cb(null, this.address());
	});
};
