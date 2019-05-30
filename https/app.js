const path = require('path');
const {run} = require('khala-nodeutils').baseApp();
const port = process.env.port ? process.env.port : 443;

const key = path.resolve(__dirname, 'fixture/key.pem');
const cert = path.resolve(__dirname, 'fixture/cert.pem');


const secureProtocol = 'TLSv1_2_method';
const minVersion = ['TLSv1.2', 'TLSv1.1', 'TLSv1'][0]; // NOTE: only work for nodejs 11+
const tlsOptions = {key, cert, ca: cert, secureProtocol};

const {app} = run(port, undefined, tlsOptions);
app.get('/', (req, res) => {
	console.info('get ping');
	res.send('pong from server');
});

app.post('/post', (req, res) => {
	console.info(req.url, 'req.body', req.body);
	res.json(req.body);
});
