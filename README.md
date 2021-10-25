# Carátulas UCSP API

Era la parte back-end de la aplicación [Carátulas UCSP](https://github.com/oscaramos/caratulas-ucsp)

Fue reemplazado por una solución que prescinde de la necesidad de un backend

## ¿Cómo funciona?

El usuario hace un request con el siguiente formato:

```json
{
  "career": "Computer Science",
  "course": "Curso final de carrera",
  "work": "Trabajo final de carrera",
  "gender": "M",
  "names": ["Nombre1 Nombre2 Apellido1 Apellido2"],
  "semester": "Semestre X",
  "year": "2020-1"
}
```

Y el sistema puede responder con:

```js
{
  "link": "localhost:4000/dy52b899.pdf"
}
```

Este link apunta hacia una carátula compilada con los datos ingresados por el usuario

El documento va a estar disponible 10 minutos antes de que se expire

## Documentación

La documentación completa de las consultas se encuentran [aquí](https://documenter.getpostman.com/view/10567086/T1LHGp73?version=latest)

## Desarrollo

Es necesario tener instalado [docker](https://www.docker.com/).

1. Para la construcción del contenedor `docker build -t oscaramos/caratulas-ucsp-api .`
2. Para la ejecución del contenedor `docker run -it -p 4000:4000 oscaramos/caratulas-ucsp-api`
