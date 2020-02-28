# s3 nginx proxy

The goal here is to allow for a small ngnix server to proxy requests through to s3.

The `conf/js/routes.json` file, which we could generate, is a map of route to app name.

Then, the inbound requests, will simply proxy pass the request to the s3 bucket.

## Running

Build the docker container with/

```shell
docker build -t nginx-proxy-s3 .
```

Then run it with...

```shell
docker run -p 8080:80 --rm nginx-proxy-s3
```

Optionally you can mount the logs directory...

```shell
docker run -p 8080:80 -v $(pwd)/conf/logs/:/etc/nginx/logs --rm nginx-proxy-s3
```
