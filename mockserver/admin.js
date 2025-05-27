import mockserver from 'mockserver-node'

export async function start(serverPort) {
    await mockserver.start_mockserver({
        serverPort,
        trace: true
    })
}

export async function stop(serverPort) {
    await mockserver.stop_mockserver({
        serverPort
    })
}