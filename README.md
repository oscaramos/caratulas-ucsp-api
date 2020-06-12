# Caratulas UCSP API
Es la parte back-end de la aplicación [Caratulas UCSP](https://github.com/oscaramos/caratulas-ucsp).

## ¿Cómo funciona?
El usuario hace un request con el siguiente formato:
``` js
{
  career: 'Computer Science',
  course: 'Curso final de carrera',
  work: 'Trabajo final de carrera',
  gender: 'M',
  names: ['Nombre1 Nombre2 Apellido1 Apellido2'],
  semester: 'Semestre X',
  year: '2020-1',
}
```


Y el sistema responde con:
``` js
{
  link: "http://localhost:4000/dy52b899.pdf"
}
```
Este link apunta hacia una caratula compilada con los datos ingresados por el usuario.

## Compilación
El sistema es compilado en formato latex con un compilador tex-live. 
Sobre un contenedor docker conteniendo un sistema operativo ubuntu 16.04 LTS. 
  

# Trabajos futuros
En un futuro escribire una mejor documentación que describa como instalar y usar esta api de caratulas.
