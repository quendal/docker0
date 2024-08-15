# Etapa 1: Construcción
FROM maven:3.8.5-openjdk-17 AS build

WORKDIR /app

# Copiar el archivo pom.xml y descargar las dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiar el código fuente
COPY src /app/src

# Compilar la aplicación
RUN mvn package -DskipTests

# Etapa 2: Imagen final
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copiar el JAR compilado desde la etapa de construcción
COPY --from=build /app/target/mi-aplicacion-java-1.0-SNAPSHOT.jar .

# Comando para ejecutar la aplicación
CMD ["java", "-jar", "mi-aplicacion-java-1.0-SNAPSHOT.jar"]
