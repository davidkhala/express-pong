import {axiosPromise} from 'khala-axios';
import assert from 'assert';
describe('http', function () {
	this.timeout(0);
	const {PORT} = process.env;
	it('ping', async () => {
		const url = `http://localhost:${PORT}/`;
		const pongResult = await axiosPromise({url, method: 'GET'});
		assert.strictEqual(pongResult, '\npong\n');
	});
});