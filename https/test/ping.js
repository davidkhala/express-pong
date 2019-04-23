const port = process.env.port ? process.env.port : 443;
const nodeUtils = require('khala-nodeutils');
const {ping} = nodeUtils.request();
const secureProtocols = [
	'TLSv1_2_method',
	'TLSv1_2_client_method',
	'TLSv1_2_server_method',
	'TLSv1_1_method',
	'TLSv1_1_client_method',
	'TLSv1_1_server_method',
	'TLSv1_method',
	'TLSv1_client_method',
	'TLSv1_server_method',
	'SSLv3_method',
	'SSLv3_client_method',
	'SSLv3_server_method'
];
const path = require('path');
const cert = path.resolve(__dirname, '../fixture/cert.pem');
const httpsPing = async (secureProtocol) => {
	const result = await ping(`https://localhost:${port}`, {
		secureProtocol,
		cert
	});
	console.info(secureProtocol, result);
};
const task = async () => {
	for (const secureProtocol of secureProtocols) {
		try {
			await httpsPing(secureProtocol);
		} catch (e) {
			console.error(secureProtocol, e);
		}

	}
};
task();