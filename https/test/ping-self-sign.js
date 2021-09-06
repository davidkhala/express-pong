const assert = require('assert');
const {axiosPromise} = require('khala-axios');
const path = require('path');
const cert = path.resolve(__dirname, 'server.cert');
const port = 5443;
describe('self-signed https', () => {

	it('ping', async function () {
		this.timeout(0);
		const url = `https://localhost:${port}`;
		console.info(`targeting ${url}`);
		const result = await axiosPromise({url, method: 'GET'}, {
			cert, rejectUnauthorized: false, ca: cert,
		});
		assert.strictEqual(result, '\npong\n');
	});
});