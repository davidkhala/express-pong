const {grpcServer, load} = require('khala-grpc');
const path = require('path');
const pingProtoPath = path.resolve(__dirname, 'ping.proto');
const {PingService: {service}} = load(pingProtoPath).object;
const port = process.env.port || 9090;

const services = [{
	service,
	implementation: {
		ping: (req, callBack) => {
			console.log(req);
			const err = undefined;
			callBack(err, {data: 'pong from server', errCode: 'success'});
		}
	}
}];
grpcServer({port}, services);


console.log(`Server running at ${baseUrl}`);
