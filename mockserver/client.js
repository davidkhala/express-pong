import {mockServerClient} from 'mockserver-client'
// import {Expectation} from 'mockserver-client'

export class Client {
    constructor(host = 'localhost', port = 1080) {
        this.client = mockServerClient(host, port)
    }

    /**
     *
     * @param {Expectation} expectation
     */
    async mock(...expectation) {
        await this.client.mockAnyResponse(expectation)
    }

    async pong() {
        await this.mock({
            httpRequest: {
                method: 'GET',
                path: '/',
            },
            httpResponse: {
                statusCode: 200,
                body: '\npong\n',
            }
        })
    }
}
