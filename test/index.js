const {execSync} = require('child_process')
const {axiosPromise} = require('khala-axios')
const {sleep} = require('khala-light-util')
const assert = require('assert')
describe('http', () => {
    const port = 3000
    before(async () => {
        execSync('pm2 --version')
        execSync('pm2 show http >/dev/null')

        try {
            execSync('pm2 delete http')
        } catch (e) {
            console.error(e)
        }
        execSync(`port=${port} pm2 start app.js --name http`, {encoding: 'utf-8'})
        await sleep(1000)
    })
    it('ping', async () => {
        const url = `http://localhost:${port}/`
        const pongResult = await axiosPromise({url, method: 'GET'})
        assert.strictEqual(pongResult, 'pong\n')
    })
})