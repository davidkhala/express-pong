#!/usr/bin/env node
const {run} = require('khala-nodeutils/baseApp');
const port = process.env.port || 443;

const {key, cert} = process.env
const tlsOptions = {key, cert, ca: cert};
if (process.version.match(/^(v10\.|v12\.|v14\.)/)) {
    const minVersion = 'TLSv1.2'
    Object.assign(tlsOptions, {minVersion})
    console.info('use minVersion', minVersion)
} else if (process.version.match(/^v8./)) {
    const secureProtocol = 'TLSv1_method';
    Object.assign(tlsOptions, {secureProtocol})
    console.info('use secureProtocol', secureProtocol)
}

const {app} = run(port, undefined, tlsOptions);
app.get('/', (req, res) => {
    console.info('get ping');
    res.send('pong\n');
});
