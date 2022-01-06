#!/usr/bin/env node
import {grpcServer, load} from 'khala-grpc';
import path from 'path';
const pingProtoPath = path.resolve(__dirname, 'ping.proto');
const {PingService: {service}} = load(pingProtoPath).object;
const port = process.env.port || 9090;

const services = [{
	service,
	implementation: {
		ping: (req, callBack) => {
			console.log(req);
			const err = undefined;
			callBack(err, {data: 'pong', errCode: 'success'});
		}
	}
}];
grpcServer({port}, services);


console.log(`Server running at`, {port});
