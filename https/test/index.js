import assert from 'assert';
import {axiosPromise} from 'khala-axios';
import path from 'path';
const cert = path.resolve(__dirname, 'davidkhala.com/fullchain.cer');
const port = process.env.port || 3443;
describe('https', () => {

	it('ping express-pongs', async function () {
		this.timeout(0);
		const url = `https://localhost:${port}`;
		console.info(`targeting ${url}`);
		const result = await axiosPromise({url, method: 'GET'}, {
			cert, rejectUnauthorized:false
		});
		assert.strictEqual(result, '\npong\n');
	});
});