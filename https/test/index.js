import assert from 'assert';
import {axiosPromise} from '@davidkhala/axios/index.js';
import path from 'path';
import {filedirname} from '@davidkhala/light/es6.mjs';
filedirname(import.meta)
const cert = path.resolve(__dirname, 'davidkhala.com/fullchain.cer');
const port = 3443;
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