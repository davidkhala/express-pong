const {grpcRequest} = require('khala-grpc');
const path = require('path');


const host = process.env.host || 'localhost';
const port = process.env.port || 9090;
const url = `${host}:${port}`;

const task = async () => {
	switch (parseInt(process.env.taskID)) {

		default:
			const protoPath = path.resolve(__dirname, '../ping.proto');
			console.debug('ping to url', url);
			const result = await grpcRequest(protoPath, 'PingService', url, 'ping', {});
			console.log('ping result', result);
	}
};
task();
