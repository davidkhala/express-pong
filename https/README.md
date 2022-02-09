## Run

### As Docker container
``` 
export exposedPort=<exposed-port>
docker run -p ${exposedPort}:443 -v ${PWD}/server.key:server.key -v fullchain.cer:fullchain.cer ghcr.io/davidkhala/https
```


### As node process
```
cd https
```
- `PORT=<port> node app.js`
- Or with `nohup` to run in background
    - `PORT=<port> nohup nodejs app.js &`