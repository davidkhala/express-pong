const assert = require('assert');
const {axiosPromise} = require('khala-axios');
const path = require('path');
const cert = path.resolve(__dirname, 'cert.pem');
const key = path.resolve(__dirname, 'key.pem');
const port = 3443;
const {PM2} = require('khala-pm2');
const {sleep} = require('khala-light-util');
const httpsPing = async () => {
	const url = `https://localhost:${port}`;

	const result = await axiosPromise({url, method: 'GET'}, {
		ca: cert, rejectUnauthorized: false,
	});
	assert.strictEqual(result, 'pong\n');
};
describe('https', function () {
	this.timeout(0);
	const pm2 = new PM2();
	const name = 'https';
	before(async () => {

		await pm2.connect();
		console.debug('==pm2 connected');
		const app = path.resolve(__dirname, '../app.js');
		const env = {
			key,
			cert,
			port,
		};

		const existingApp = await pm2.get(name);
		console.debug('==pm2 got');
		if (!existingApp) {
			await pm2.run({name, script: app, env});
			await sleep(1000);// TODO This is must for waiting until ready
		}

	});

	it('https ping', async () => {
		await httpsPing();
	});

	after(async () => {
		await pm2.delete(name);
		pm2.disconnect();
	});

});