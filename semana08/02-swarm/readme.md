# Comandos

```
docker service create --name nginx --replicas 3 nginx:latest
docker service rm nginx

docker service create -p 8090:80 --name nginx --replicas 3 nginx:latest
docker service rm nginx

docker service ls
```


Ejemplo tomado de: https://docs.docker.com/engine/swarm/stack-deploy/


# Ejemplo de pasos

