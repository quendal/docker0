# Volumenes


## 1. Tipo bind

```
docker run -d -it --name bind01 --mount type=bind,source="$(pwd)"/target,target=/app nginx:latest

docker run -d -it --name bind02 -v "$(pwd)"/target:/app nginx:latest
```


## 2. Tipo volume

```
docker run -d -it --name bind03 --mount type=volume,source=vol03,target=/app nginx:latest

docker run -d -it --name bind05 -v vol05:/app nginx:latest
```

```
docker run -d \
  --name=nginxtest \
  --mount source=nginx-vol,destination=/usr/share/nginx/html,readonly \
  nginx:latest
```