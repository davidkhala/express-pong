const {execSync} = require('child_process')
const assert = require('assert')
const {sleep} = require('khala-light-util')
const {axiosPromise} = require('khala-axios');
const path = require('path');
const cert = path.resolve(__dirname, 'cert.pem');
const key = path.resolve(__dirname, 'key.pem');
const port = 3443;
const httpsPing = async () => {
    const url = `https://localhost:${port}`;

    const result = await axiosPromise({url, method: 'GET'}, {
        ca: cert,
    });
    assert.strictEqual(result, 'pong\n');
};
describe('https', function () {
    this.timeout(3000)
    before(async () => {
        execSync('pm2 --version')

        try {
            execSync('pm2 delete https')
        } catch (e) {
            console.error(e)
        }
        const app = path.resolve(__dirname, '../app.js')
        execSync(`key=${key} cert=${cert} port=${port} pm2 start ${app} --name https`, {encoding: 'utf-8'})
        await sleep(1000)
    })

    it('https ping', async () => {
        await httpsPing();
    })
    it('pm2 logs', () => {
        let result = execSync('pm2 status', {encoding: 'utf-8'});
        console.log(result)
        result = execSync('pm2 logs https --nostream --lines 10', {encoding: 'utf-8'})
        console.log(result)
    })


})