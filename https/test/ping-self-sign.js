import assert from 'assert';
import path from 'path';
import {axiosPromise} from '@davidkhala/axios/index.js';
import {filedirname} from "@davidkhala/light/es6.mjs"
filedirname(import.meta)
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