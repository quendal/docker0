# Solución de proyecto

## Subir imagenes de backend a Docker Hub
1. Crear repositorios públicos en docker hub utilizando su usuario propio.
   1. docker.io/quendal/carrito
   2. docker.io/quendal/perfil
   3. docker.io/quendal/producto
2. Hacer login a repositorios docker hub
```
docker login
# ingresar usuario y pass, o elegir otro método de autenticación
```
3. Crear las imagenes con los tags correctos:
```
cd semana08/03-proyecto
docker build -t docker.io/quendal/carrito:1 backend/carrito
docker build -t docker.io/quendal/perfil:1 backend/perfil
docker build -t docker.io/quendal/producto:1 backend/producto
```
Ya tenemos las imagenes creadas y tagueadas en la máquina local
```
docker image ls
```

Subir a los repositorios creados en el paso 1

```
docker push docker.io/quendal/carrito:1
docker push docker.io/quendal/perfil:1
docker push docker.io/quendal/producto:1 
```

4. Modificar el archivo seman08/03-proyecto/compose.yaml
   1. Se debe cambiar las direcciones de las imagenes por las generadas por ustedes
   2. El FrontEnd no se subirá a Docker Hub, pero si se levanta local (ver en compose.yaml que se construye con build)
5. Levantar el proyecto:
```
docker compose up 
# o docker compose up -d
```
