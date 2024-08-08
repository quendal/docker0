## Empaquetamiento manual
    * Crear bdd
```
 docker run -d -it --name db -e MYSQL_DATABASE=exampledb -e MYSQL_USER=exampleuser -e MYSQL_PASSWORD=examplepass -e MYSQL_RANDOM_ROOT_PASSWORD=abcdefg mysql:8.0 
 docker run --network wordpress -d -it --name dbname -e MYSQL_DATABASE=exampledb -e MYSQL_USER=exampleuser -e MYSQL_PASSWORD=examplepass -e MYSQL_RANDOM_ROOT_PASSWORD=abcdefg mysql:8.0 
```    