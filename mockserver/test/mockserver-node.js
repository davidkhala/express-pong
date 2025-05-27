import {start, stop} from '../admin.js'
describe('', function () {
    this.timeout(0)
    it('start and stop', async () => {
        const port = 3200
        await start(port)
        await stop(port)
    })
})