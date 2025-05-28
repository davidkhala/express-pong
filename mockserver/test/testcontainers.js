import {Controller} from '../testcontainers.js'
import * as assert from "node:assert";
import {axiosPromise} from '@davidkhala/axios/index.js'
import {Client} from '../client.js'
describe('http', function () {
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
    it('ping', async () => {
        const client = new Client('localhost', controller.port)
        await client.pong()
        const url = `${controller.url}/`
        const r = await axiosPromise({
            url, method: 'GET'
        })
        assert.equal(r, '\npong\n')
    })

})
describe('tls', function () {
    this.timeout(0)
    //  TODO not supported yet
    const controller = new Controller(true)
    before(async () => {
        await controller.start()
    })
    after(async () => {
        await controller.stop()
    })
    it('', async ()=>{
        console.debug(controller.url)// TODO this is still start with http
    })

})