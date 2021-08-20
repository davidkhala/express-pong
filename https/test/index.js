const assert = require('assert');
const {axiosPromise} = require('khala-axios');
const path = require('path');
const cert = path.resolve(__dirname, 'cert.pem');
const port = 3443;
const httpsPing = async () => {
	const url = `https://localhost:${port}`;

	const result = await axiosPromise({url, method: 'GET'}, {
		ca: cert,
	});
	assert.strictEqual(result, 'pong\n');
};
describe('https', function () {
	this.timeout(0);

	it('https ping', async () => {
		await httpsPing();
	});

});