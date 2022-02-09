## Run

### As Docker container
``` 
export exposedPort=<exposed-port>
docker run -p ${exposedPort}:443 -v test/davidkhala.com/ap-singapore-1.ping.davidkhala.com.key:server.key -v test/davidkhala.com/fullchain.cer:fullchain.cer ghcr.io/davidkhala/https
```


### As node process
```
cd https
```
- `PORT=<port> node app.js`
- Or with `nohup` to run in background
    - `PORT=<port> nohup nodejs app.js &`