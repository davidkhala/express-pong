import {MockserverContainer} from '@testcontainers/mockserver'

export class Controller {
    constructor(tls) {
        this.container = new MockserverContainer("mockserver/mockserver:5.15.0")
        if(tls){
            this.container.withEnvironment('MOCKSERVER_PROACTIVELY_INITIALISE_TLS=true')
        }
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

