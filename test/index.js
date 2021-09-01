const {execSync} = require('child_process');
const {axiosPromise} = require('khala-axios');
const {sleep} = require('khala-light-util');
const assert = require('assert');
describe('http', function () {
	this.timeout(0);
	const port = 3000;
	before(async () => {
		execSync(`port=${port} pm2 start app.js --name http`, {encoding: 'utf-8'});
		await sleep(1000);
	});
	it('ping', async () => {
		const url = `http://localhost:${port}/`;
		const pongResult = await axiosPromise({url, method: 'GET'});
		assert.strictEqual(pongResult, 'pong\n');
	});
});