import {grpcRequest} from '@davidkhala/grpc';
import path from 'path';
import {filedirname} from '@davidkhala/light/es6.mjs';
filedirname(import.meta)

const host = process.env.host || 'localhost';
const port = process.env.PORT || 9090;
const url = `${host}:${port}`;

describe('', () => {
	it('', async () => {
		const protoPath = path.resolve(__dirname, '../ping.proto');
		console.debug('ping to url', url);
		const result = await grpcRequest(protoPath, 'PingService', url, 'ping', {});
		console.log('ping result', result);
	});

});

