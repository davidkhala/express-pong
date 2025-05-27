import {Controller} from '../testcontainers.js'
import * as assert from "node:assert";
import {axiosPromise} from '@davidkhala/axios/index.js'

describe('', function () {
    this.timeout(0)
    const controller = new Controller()
    before(async () => {
        await controller.start()
    })
    after(async () => {
        await controller.stop()
    })
    it('url, port', async () => {
        assert.equal(controller.url, `http://localhost:${controller.port}`)
    })
    it('/mockserver/status', async () => {
        const url = `${controller.url}/mockserver/status`
        const {artifactId, groupId, ports, version} = await axiosPromise({
            url, method: 'PUT'
        })
        assert.equal(artifactId, 'mockserver-core')
        assert.equal(groupId, 'org.mock-server')
        assert.equal(ports.length, 1)
        assert.equal(ports[0], 1080)
        assert.equal(version, '5.15.0')
    })

})