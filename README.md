# Caratulas UCSP API
Es la parte back-end de la aplicación [Caratulas UCSP](https://github.com/oscaramos/caratulas-ucsp).

## ¿Cómo funciona?
El usuario hace un request con el siguiente formato:
``` json
{
  "career": "Computer Science",
  "course": "Curso final de carrera",
  "work": "Trabajo final de carrera",
  "gender": "M",
  "names": ["Nombre1 Nombre2 Apellido1 Apellido2"],
  "semester": "Semestre X",
  "year": "2020-1",
}
```


Y el sistema puede responder con:
``` js
{
  "link": "http://54.193.19.36:4000/dy52b899.pdf"
}
```
Este link apunta hacia una caratula compilada con los datos ingresados por el usuario.

El documento estara disponible 10 minutos antes de que se auto-destruya

La documentación completa de las consultas se encuentran [aqui](https://documenter.getpostman.com/view/10567086/T1LHGp73?version=latest)

## Desarrollo
Tener instalado [docker](https://www.docker.com/).

1. Para la construccion del contenedor `docker build -t oscaramos/caratulas-ucsp-api .`
2. Para la ejecucion del contenedor `docker run -it -p 4000:4000 oscaramos/caratulas-ucsp-api` 

## Despliegue
Este sistema esta desplegado sobre esta ip: http://54.193.19.36:4000/

