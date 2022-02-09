## Run

### As Docker container
```
export exposedPort=<exposed-port>
cd https
docker run -p ${exposedPort}:443 -v ${PWD}/test/davidkhala.com/ap-singapore-1.ping.davidkhala.com.key:/server.key -v ${PWD}/test/davidkhala.com/fullchain.cer:/fullchain.cer ghcr.io/davidkhala/https
```


### As node process
```
cd https
```
- `PORT=<port> node app.js`
- Or with `nohup` to run in background
    - `PORT=<port> nohup nodejs app.js &`