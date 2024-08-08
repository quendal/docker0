# Red
```
docker network create --subnet 10.17.0.0/16 red_interna
```
# Contenedor

docker run -d --network red_interna -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=123456 --name mongo mongo

# Código

Cambiar en programa el nombre de la conexión

docker build -t producto .

docker run -d -it --network red_interna -p 3002:3002 --name producto producto 