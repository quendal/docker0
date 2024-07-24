## Tipos de red

### 1. None
```
docker run -it --network=none --name red_none nicolaka/netshoot
 # dentro del contenedor
 # Intentar hacer curl, ping, no se tiene acceso a internet
 ip addr # no muestra interfaz (solo loopback)
```

## Multiples redes
### 2. Crear dos redes
```
  docker network create --subnet 10.1.0.0/16 front
  docker network create --subnet 10.2.0.0/16 back


  docker run -it -d --network=front --name webAPI nicolaka/netshoot sleep 1d
  docker run -it -d --network=front --name productCatalog nicolaka/netshoot sleep 1d
  docker run -it -d --network=back --name database nicolaka/netshoot sleep 1d

  # Instalar nginx
  apk update   # actualiza paquetes
  apk add nginx # instala nginx
  nginx # inicia nginx
  curl 10.x.x.x # test

```

