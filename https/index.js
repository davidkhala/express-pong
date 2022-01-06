/**
 * @typedef {string} SecureProtocol - Legacy mechanism to select the TLS protocol version to use. Use minVersion and maxVersion instead.
 *  It does not support limiting the protocol to TLSv1.3.
 *  The possible values are listed as [SSL_METHODS](https://www.openssl.org/docs/man1.1.1/man7/ssl.html#Dealing-with-Protocol-Methods),use the function names as strings.
 *  It is not recommended to use TLS versions less than 1.2, but it may be required for interoperability.
 */

/**
 * @deprecated
 * @type {SecureProtocol[]}
 */
export const secureProtocol = [
	'TLSv1_2_method',
	'TLSv1_2_client_method',
	'TLSv1_1_method', // use 'TLSv1_1_method' to force TLS version 1.1
	'TLSv1_1_client_method',
	'TLSv1_method',
	'TLSv1_client_method',
];

export const minVersion = ['TLSv1.2', 'TLSv1.1', 'TLSv1']; // NOTE: only work for nodejs 11+