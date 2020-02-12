const {grpcRequest} = require('khala-grpc');
const path = require('path');
const protoPath = path.resolve(__dirname, '../ping.proto');

const url = 'localhost:2020';

const ping = async () => {
	const result = await grpcRequest(protoPath, 'PingService', url, 'ping', {});
	console.log('ping', result);
};
ping();
