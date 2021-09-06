const assert = require('assert');
const {axiosPromise} = require('khala-axios');
const path = require('path');
const cert = path.resolve(__dirname, 'cert.pem');
const port = process.env.port || 3443;
const domain = process.env.fqdn || 'localhost';
const ca = path.resolve(__dirname, 'ca.cer');
describe('https', () => {

	it('ping express-pongs', async function () {
		this.timeout(0);
		const url = `https://${domain}:${port}`;

		const result = await axiosPromise({url, method: 'GET'}, {
			cert,ca
		});
		assert.strictEqual(result, '\npong\n');
	});
});