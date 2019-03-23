# express-pong
nothing but a node server response ping.


## Notes
ICMP has no ports and is neither TCP nor UDP. 
ICMP is IP protocol 1 (see RFC792), TCP is IP protocol 6 (described in RFC793) and UDP is IP protocol 17(see RFC768). 
UDP and TCP have ports, ICMP has no ports, 
## TODO

- try "axios": "^0.18.0" 
- https: try to enable clientAuth, 
    - const tlsOptions = {requestCert: true, rejectUnauthorized:true};