# gRpc pong


## Reference
- [official] https://grpc.io/grpc/node/
- [CN] protobuf syntax : https://www.bookstack.cn/read/go-grpc/chapter1-protobuf.md

## gRpc Notes
- proto3不支持proto2中的required和optional关键字
- //单行注释。
- npm grpc: size 43M
- import package 包名需要与目录结构契合 
- Can't add a service to a started server.

## TODO
- grpc server error while running in node:10 docker container
    ```
    E0214 03:58:17.015251008       1 server_chttp2.cc:40]        {"created":"@1581652697.015219684","description":"Only 1 addresses added out of total 2 resolved","file":"../deps/grpc/src/core/ext/transport/chttp2/server/chttp2_server.cc","file_line":403,"referenced_errors":[{"created":"@1581652697.015218001","description":"Failed to add port to server","file":"../deps/grpc/src/core/lib/iomgr/tcp_server_custom.cc","file_line":404,"referenced_errors":[{"created":"@1581652697.015215743","description":"Failed to bind to port","file":"../deps/grpc/src/core/lib/iomgr/tcp_uv.cc","file_line":72,"grpc_status":14,"os_error":"address not available"}]}]}
    ```
  [issue](https://github.com/grpc/grpc/issues/19151)