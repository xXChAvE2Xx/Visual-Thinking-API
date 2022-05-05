# Visual-Thinking-API
La siguiente API tiene como requerimientos los siquientes puntos:
- Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
- Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
- Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a `500`.

## Diagrama de funcionamiento
![Visual-Thinking-API-Diagram](https://user-images.githubusercontent.com/54995852/167043222-64427a25-da21-4ed8-a5f5-561eb7a0015a.svg)

## Herramientas utilizadas
- **Node:** Se esta utilizando la version `16.13.1`
- **Jest:** Jest es un marco de pruebas de JavaScript con un enfoque en la simplicidad.
- **eslint:** ESLint analiza estáticamente su código para encontrar rápidamente los problemas.
- **Express:** Express es un marco de trabajo de aplicaciones web Node.js mínimo y flexible que proporciona un sólido conjunto de características para aplicaciones web y móviles.
## Instalación de dependencias
```
$ npm install --save-dev jest
$ npm install eslint --save-dev
$ npm install express --save
```
## Documentación
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Jest](https://jestjs.io/es-ES/docs/getting-started)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Node](https://nodejs.org/en/docs/)

## Pruebas
Se tiene dos pruebas de unidad, una prueba para la lectura de los archivos **JSON** y otro para el controlador. Los archivos se llaman `VisualPartnerController.test.js` y `Reader.test.js`. <br>
Para correr las pruebas simplemente basta con escribir en nuestro **CLI** lo siguiente:   

```
$ npm test
```

## Función

|Endpoint                                         | Response                                                                 |
|-------------------------------------------------|--------------------------------------------------------------------------|
| `localhost:3000/v1/students/all`                | Regresa toda la información de los estudiantes.                          |
| `localhost:3000/v1/students/certification/email`| Regresa solo los correos de los estudiantes que tienen un certificado.   |
| `localhost:3000/v1/students/credits`            | Regresa la información de los estudiantes que tienen más de 500 créditos.|     

## Demo

