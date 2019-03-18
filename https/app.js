const path = require('path');
const {run} = require('khala-nodeutils').baseApp();
const port = process.env.port ? process.env.port : 443;

const key = path.resolve(__dirname, 'fixture/key.pem');
const cert = path.resolve(__dirname, 'fixture/cert.pem');

const tlsOptions = {key, cert, ca: cert};

const {app} = run(port, undefined, tlsOptions);
app.get('/', (req, res) => {
	console.info('get ping');
	res.send('pong from server');
});