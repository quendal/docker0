

# Docker y procesos

1. Contenedor que escribe a "docker logs"

```
docker run ubuntu bash -c "while true; do echo 'Hola desde el hilo principal del contenedor, mostrare el mensaje cada 5 segundos.' && sleep 5; done "
```

2. Contenedor que escribe a logs y se detiene luego de 30 segundos.

```
docker run ubuntu bash -c "echo 'Hola desde el hilo principal del contenedor, me detendre en 30 segundos' && sleep 30;  "
```

3. Dentro del contenedor
```
bash -c "while true; do echo '[OTRO HILO] Segundo hilo dentro del contenedor, mostrare el mensaje cada 5 segundos.' && sleep 5; done "
```