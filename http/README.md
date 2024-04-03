## Run

### As Docker container
``` 
export exposedPort=<exposed-port>
docker run -p ${exposedPort}:80 ghcr.io/davidkhala/http
```

### As node process
```
cd http
```
- `PORT=<port> node app.js`
- with `nohup` to run in background
    - `PORT=<port> nohup node app.js &`
- as binary: `npx pong-http`
