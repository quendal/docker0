# Limpieza

## 1. uno a uno
```
docker run -d ubuntu sleep 1d

docker rm [id] # en ejecucion
docker stop [id]
```

## 2. Parametro q
```
  docker pull ubuntu && docker pull fedora && docker pull debian

  docker run -d ubuntu sleep 1d
  docker run -d fedora sleep 1d
  docker run -d debian sleep 1d

  docker stop $(docker ps -q)  # Detiene todos los contenedores en ejecucion
  docker start $(docker ps -q -a) # Inicia todos los contenedores 
  docker rm $(docker ps -q -a) # Elimina todos los contenedores (algunas daran error si estan en ejecuion)

```
