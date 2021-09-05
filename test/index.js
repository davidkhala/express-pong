const {axiosPromise} = require('khala-axios');
const assert = require('assert');
describe('http', function () {
	this.timeout(0);
	const {port} = process.env;
	it('ping', async () => {
		const url = `http://localhost:${port}/`;
		const pongResult = await axiosPromise({url, method: 'GET'});
		assert.strictEqual(pongResult, '\npong\n');
	});
});