"use strict";
const fs = require("fs");
const request = require("request");
const URL = require("url");
const dl = require("deck-lightning");
const opts =  {
	delaySeconds: 90
};

function getGist (url, cb) {
	const id = URL.parse(url).pathname.split("/").pop();
	request.get(`https://api.github.com/gists/${id}`, { headers: { "user-agent": "request" } }, function (err, res, body) {
		if (err) {
			cb(err);
		}
		else if (res.statusCode !== 200) {
			cb(new Error(`Unexpected http response: ${res.statusCode}`));
		}
		else {
			cb(null, body);
		}
	});
}

function extractContentOfFile (res, filename) {
	return JSON.parse(res).files[filename].content;
}

function saveContentLocally (filename, data, cb) {
	fs.writeFile(filename, data, "utf8", cb);
}

function saveAllRemoteGists (items) {
	return Promise.all(items.map(function (item) {
		return new Promise(function (resolve, reject) {
			getGist(item.url, function (err, res) {
				if (err) {
					return reject(err);
				}
				else {
					const content = extractContentOfFile(res, item.filename);
					saveContentLocally(item.filename, content, function (err) {
						if (err) {
							reject(err);
						}
						else {
							resolve();
						}
					});
				}
			});
		});
	}));
}

module.exports = function (items, cb) {
	saveAllRemoteGists(items)
		.then(function () {
			opts.files = items.map(function (item) {
				return item.filename;
			}).concat("end.md");
			dl(opts, cb);
		});
};
