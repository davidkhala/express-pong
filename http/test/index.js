import {axiosPromise} from '@davidkhala/axios/index.js';
import {run} from '@davidkhala/nodeutils/baseApp.js';
import assert from 'assert';

describe('http', function () {
    this.timeout(0);
    const {PORT, CI} = process.env;
    it('server smoke', async () => {
        const {server} = run(13000)
        if (CI) {
            server.close()
        }
    })
    it('ping', async () => {
        const url = `http://localhost:${PORT || 80}/`;
        const pongResult = await axiosPromise({url, method: 'GET'});
        assert.strictEqual(pongResult, '\npong\n');
    });
});