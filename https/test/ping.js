const port = process.env.port || 443;
const {axiosPromise} = require('khala-axios');
const secureProtocols = [
    'TLSv1_2_method',
    'TLSv1_2_client_method',
    'TLSv1_1_method',
    'TLSv1_1_client_method',
    'TLSv1_method',
    'TLSv1_client_method',
];
const path = require('path');
const cert = path.resolve(__dirname, '../cert.pem');
const httpsPing = async (secureProtocol) => {
    const url = `https://localhost:${port}`;

    const result = await axiosPromise({url, method: 'GET'}, {
        secureProtocol,
        ca: cert,
    });
    console.info(secureProtocol, result);
};
describe('https', () => {
    it('secureProtocols', async () => {
        for (const secureProtocol of secureProtocols) {
            try {
                await httpsPing(secureProtocol);
            } catch (e) {
                console.error(secureProtocol, e);
            }

        }
    })
})