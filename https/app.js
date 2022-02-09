#!/usr/bin/env node
import {run} from '@davidkhala/nodeutils/baseApp.js';
import express from 'express';
import path from 'path';

if (process.argv[2] === 'help') {
	console.info(`
        environments:
            [PORT]  : default to 443
            key     : Required. TLS Key file path
            cert    : Required. TLS Cert file path
        Example:
            key=[key file path] cert=[cert file path] node app.js
    `);
	process.exit(0);
}

const port = process.env.PORT || 443;
const {key = path.resolve('server.key'), cert = path.resolve('fullchain.cer'), ca} = process.env;

const tlsOptions = {key, cert, ca};
if (process.version.match(/^(v10\.|v12\.|v14\.)/)) {
	const minVersion = 'TLSv1.2';
	Object.assign(tlsOptions, {minVersion});
	console.info('use minVersion', minVersion);
} else if (process.version.match(/^v8./)) {
	const secureProtocol = 'TLSv1_method';
	Object.assign(tlsOptions, {secureProtocol});
	console.info('use secureProtocol', secureProtocol);
}

const {app} = run(port, undefined, tlsOptions);
app.use(express.static('staticFiles'));

app.get('/', (req, res) => {
	console.info('get ping');
	res.send('\npong\n');
});
