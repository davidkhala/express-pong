import {MockserverContainer} from '@testcontainers/mockserver'

export class Controller {
    constructor() {
        this.container = new MockserverContainer("mockserver/mockserver:5.15.0")
    }

    async start() {
        this.handler = await this.container.start();
    }

    get port() {
        return this.handler.getMockserverPort()
    }

    get url() {
        return this.handler.getUrl()
    }

    async stop() {
        return await this.handler.stop()
    }

}

