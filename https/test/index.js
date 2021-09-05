const assert = require('assert');
const {axiosPromise} = require('khala-axios');
const path = require('path');
const cert = path.resolve(__dirname, 'cert.pem');
const port = 3443;
const domain = process.env.fqdn || 'localhost';
const httpsPing = async () => {
	const url = `https://${domain}:${port}`;

	const result = await axiosPromise({url, method: 'GET'}, {
		ca: cert, rejectUnauthorized: false,
	});
	assert.strictEqual(result, '\npong\n');
};
describe('https', () => {


	it('ping', async function () {
		this.timeout(0);
		await httpsPing();
	});
});