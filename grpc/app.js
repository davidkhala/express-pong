const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const pingProtoPath = path.resolve(__dirname, 'ping.proto');
const {PingService: {service}} = grpc.loadPackageDefinition(protoLoader.loadSync(pingProtoPath));
const server = new grpc.Server();
const port = process.env.port ? process.env.port : 80;


const baseUrl = `localhost:${port}`;
server.addService(service, {
	ping: (req, callBack) => {
		console.log(req);
		const err = undefined;
		callBack(err, {data: 'pong from server', errCode: 'success'});
	}
});

server.bind(baseUrl, grpc.ServerCredentials.createInsecure());


server.start();


console.log(`Server running at http://${baseUrl}`);
