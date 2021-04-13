#!/usr/bin/env node
const path = require('path');
const {run} = require('khala-nodeutils/baseApp');
const port = process.env.port || 443;

const key = path.resolve(__dirname, './key.pem');
const cert = path.resolve(__dirname, './cert.pem');

const secureProtocol = 'TLSv1_2_method';
const minVersion = ['TLSv1.2', 'TLSv1.1', 'TLSv1'][0]; // NOTE: only work for nodejs 11+
const tlsOptions = {key, cert, ca: cert, secureProtocol};

const {app} = run(port, undefined, tlsOptions);
app.get('/', (req, res) => {
    console.info('get ping');
    res.send('pong\n');
});
