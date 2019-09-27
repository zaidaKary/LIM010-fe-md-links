# Markdown Links

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png)

## Objetivos del Proyecto

El objetivo práctico de este proyecto es aprender a crear tu propia
**librería** (o biblioteca - _library_) en JavaScript.

## Consideraciones generales

- La librería está implementada en JavaScript para ser ejecutada con
Node.js.

- El módulo es instalable via `npm install zaidaKary/md-links`. 

- Se utilizan tests unitarios como el [Jest](https://jestjs.io/).

## Diagrama de Flujo

Se diseñó el diagrama de flujo para tener una información visual de la trayectoria del proceso, y así poder definir la arquitectura del proyecto.

![Diagrama de flujo](https://github.com/zaidaKary/LIM010-fe-md-links/blob/master/img/Diagrama%20de%20flujo.png?raw=true)

## Board con el backlog para la implementación de la librería

Se utilizó las herramientas de GitHub para la organización y planificación del proyecto.

![Board1](https://user-images.githubusercontent.com/42952494/65783405-52ba1380-e115-11e9-99f8-9c8f4022f448.png)

![Board2](https://user-images.githubusercontent.com/42952494/65783596-ba705e80-e115-11e9-8749-5bdc80974a15.png)

## Guía de uso e instalación de la librería

### Instalación de la librería 

Para instalar esta librería debe ejecutar la siguiente linea de comando:
`npm install zaidaKary/md-links` o si deseamos instalarlo de manera global:
`npm install --global zaidaKary/md-links`

### Guía de uso

La aplicación se puede ejecutar de la siguiente manera a través de la terminal: `md-Links <path> [options]`

Donde:
- `path`: Ruta absoluta o relativa al archivo o directorio.
- `options`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.

Se tiene las siguientes opciones para ejecutar en la linea de comando:

- `md-Links <path>`
- `md-Links <path> --stats` o `md-Links <path> --s`
- `md-Links <path> --validate` o `md-Links <path> --v`
- `md-Links <path> --validate --stats` o `md-Links <path> --stats --validate `

Veamos los siguientes ejemplos de uso del ejecutable:

- Cuando ingresemos en la linea de comando: `md-Links ./test/prueba`

Retornará lo siguiente:

```sh13d99df067c1
$ md-links ./test/prueba
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

- Cuando ingresemos en la linea de comando: `md-Links ./test/prueba --stats`

Retornará un texto con estadísticas básicas sobre los links:

```sh13d99df067c1
$ md-links ./test/prueba --stats
Total: 2
Unique: 2
```

- Cuando ingresemos en la linea de comando: `md-Links ./test/prueba --validate` el módulo hará una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Retornará lo siguiente:

```sh13d99df067c1
$ md-Links ./test/prueba --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

- Cuando ingresemos en la linea de comando: `md-Links ./test/prueba --stats --validate`

Retornará las estadísticas de los resultados de la validación.

```sh13d99df067c1
$ md-links ./test/prueba --stats --validate
Total: 2
Unique: 2
Broken: 1
```

## Documentación técnica de la libreria

Duración del proyecto: 3 semanas.

Metodología usada: Scrum.

### Recursos utilizados

## Objetivos de aprendizaje en este proyecto

Los objetivos de aprendizaje desarrollados en este proyecto son los siguientes:

### Javascript
- [ ] Uso de callbacks
- [ ] Consumo de Promesas
- [ ] Creacion de Promesas
- [ ] Modulos de Js
- [ ] Recursión

### Node
- [ ] Sistema de archivos
- [ ] package.json
- [ ] crear modules
- [ ] Instalar y usar modules
- [ ] npm scripts
- [ ] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [ ] Testeo de tus funciones
- [ ] Testeo asíncrono
- [ ] Uso de librerias de Mock
- [ ] Mocks manuales
- [ ] Testeo para multiples Sistemas Operativos

### Git y Github
- [ ] Organización en Github

### Buenas prácticas de desarrollo
- [ ] Modularización
- [ ] Nomenclatura / Semántica
- [ ] Linting
