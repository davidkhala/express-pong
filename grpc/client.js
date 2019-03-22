const grpc = require('grpc');
const path = require('path');
const pingProtoPath = path.resolve(__dirname, 'ping.proto');

const PingService = grpc.load(pingProtoPath).PingService;
const url = 'localhost:80';
const client = new PingService(url, grpc.credentials.createInsecure());

const ping = async () => {
	return new Promise((resolve, reject) => {
		client.Ping({}, (err, res) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.info(res);
				resolve(res);
			}
		});
	});
};
ping();
