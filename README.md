# express-pong
nothing but a node server response ping.

[![server-client test](https://github.com/davidkhala/express-pong/actions/workflows/test.yml/badge.svg)](https://github.com/davidkhala/express-pong/actions/workflows/test.yml)

## Notes
- ICMP has no ports and is neither TCP nor UDP. 
> ICMP is IP protocol 1 (see RFC792), TCP is IP protocol 6 (described in RFC793) and UDP is IP protocol 17(see RFC768). 
UDP and TCP have ports, ICMP has no ports,
- TLS options:
   - [Nodejs 11+] `minVersion` set the minimum TLS version to allow. ['TLSv1.2', 'TLSv1.1', 'TLSv1']. Cannot be specified along with the secureProtocol option. It is not recommended to use less than TLSv1.2. Default: 'TLSv1'.
   - `secureProtocol` The TLS protocol version to use. The possible values are listed as [SSL_METHODS](https://www.openssl.org/docs/man1.1.0/man7/ssl.html#Dealing-with-Protocol-Methods), use the function names as strings. It is not recommended to use TLS versions less than 1.2. Default: none, see minVersion.
 
## TODO
- https: try to enable clientAuth, 
    - const tlsOptions = {requestCert: true, rejectUnauthorized:true};
- push a docker image