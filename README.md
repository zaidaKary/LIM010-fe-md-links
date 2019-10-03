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

![Board1](https://user-images.githubusercontent.com/42952494/65801452-c45a8780-e13e-11e9-91b2-d74e2e320d8e.png)

![Board2](https://user-images.githubusercontent.com/42952494/65801513-e18f5600-e13e-11e9-88f5-adea4328097b.png)

## Guía de uso e instalación de la librería

### Instalación de la librería 

Para instalar esta librería debe ejecutar la siguiente linea de comando:
`npm install zaidaKary/md-links` o si deseamos instalarlo de manera global:
`npm install --global zaidaKary/md-links`

### Guía de uso

La aplicación se puede ejecutar de la siguiente manera a través de la terminal: `md-links <path> [options]`

Donde:
- `path`: Ruta absoluta o relativa al archivo o directorio.
- `options`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.

Se tiene las siguientes opciones para ejecutar en la linea de comando:

- `md-links <path>`
- `md-links <path> --stats` o `md-links <path> --s`
- `md-links <path> --validate` o `md-links <path> --v`
- `md-links <path> --validate --stats` o `md-links <path> --stats --validate `

Veamos los siguientes ejemplos de uso del ejecutable:

- Cuando ingresemos en la linea de comando: `md-links ./some/example.md`

Retornará lo siguiente:

```sh13d99df067c1
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

- Cuando ingresemos en la linea de comando: `md-links ./some/example.md --stats`

Retornará un texto con estadísticas básicas sobre los links:

```sh13d99df067c1
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

- Cuando ingresemos en la linea de comando: `md-links ./some/example.md --validate` el módulo hará una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Retornará lo siguiente:

```sh13d99df067c1
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

- Cuando ingresemos en la linea de comando: `md-links ./some/example.md --stats --validate` o `md-Links ./some/example.md --validate --stats`

Retornará las estadísticas de los resultados de la validación.

```sh13d99df067c1
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
Casos extras:

- Cuando solo ingresamos en la linea de comando `md-links`

Retornará un mensaje:

```sh13d99df067c1
$ md-links
Ingrese una ruta, por ejemplo: md-links ./some/example.md
```

- Cuando solo ingresamos en la linea de comando `md-links ./prueba`

Retornará un mensaje:

```sh13d99df067c1
$ md-links ./prueba
La ruta no existe
```

- Cuando ingresamos en la linea de comando: `md-links ./some/example.md --valid --sts`

Retornará un mensaje:

```sh13d99df067c1
$ md-links ./some/example.md --valid --sts
Comandos incorrectos!!!
```
Lo anterior nos sale porque hemos ingresado los dos comandos incorrectos.

- Cuando ingresamos en la linea de comando: `md-links ./some/example.md --hola`

Retornará un mensaje:

```sh13d99df067c1
$ md-links ./some/example.md --hola
Comando incorrecto!!!
```
Lo anterior nos sale porque hemos ingresado un comando incorrecto.

## Documentación técnica de la libreria

Duración del proyecto: 3 semanas.

Metodología usada: Scrum.

### Recursos utilizados

- [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
- [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
- [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
- [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
- [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
- [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
- [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
- [Asíncronía en js](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
- [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
- [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
- [Path](https://nodejs.org/api/path.html)
- [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
- [Promise](https://javascript.info/promise-basics)
- [Comprendiendo Promesas en Js](https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1)
- [Pill de recursión - video](https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s)
- [Pill de recursión - repositorio](https://github.com/merunga/pildora-recursion)

## Objetivos de aprendizaje en este proyecto

Los objetivos de aprendizaje desarrollados en este proyecto son los siguientes:

### Javascript
- [x] Uso de callbacks
- [x] Consumo de Promesas
- [x] Creacion de Promesas
- [x] Modulos de Js
- [x] Recursión

### Node
- [x] Sistema de archivos
- [x] package.json
- [x] crear modules
- [x] Instalar y usar modules
- [x] npm scripts
- [x] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [x] Testeo de tus funciones
- [x] Testeo asíncrono
- [ ] Uso de librerias de Mock
- [ ] Mocks manuales
- [x] Testeo para multiples Sistemas Operativos

### Git y Github
- [x] Organización en Github

### Buenas prácticas de desarrollo
- [x] Modularización
- [x] Nomenclatura / Semántica
- [x] Linting
