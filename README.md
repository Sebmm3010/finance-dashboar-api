<h1 align="center">
  <br>
  Dashboard Financiero API
  <br>
</h1>

<h4 align="center">sta API proporciona información financiera sobre KPIs, productos y transacciones. La información se almacena en una base de datos de MongoDB.</h4>

<p align="center">
  <a href="#caracteristicas">Caracteristicas</a> •
  <a href="#como-usar">Como usar?</a> •
  <a href="#creditos">Creditos</a> •
  <a href="#licencia">Licencia</a>
</p>

## Caracteristicas

- Multiples rutas para mandar informacion.
- Capacidad de crear la base de datos en un container de Docker con una imagen de Mongo 5.0.

## Como usar?

Para clonar este repositorio se necesita [Git](https://git-scm.com) y [Node.js](https://nodejs.org/en/download/) (que viene con [npm](http://npmjs.com)) instalado en tu computadora. Desde tu línea de comando:

```bash
# Clonar repositorio
$ git clone https://github.com/Sebmm3010/finance-dashboar-api

# Ir al repositorio
$ cd finance-dashboar-api

# Instalar dependencias
$ npm install
$ yarn install
$ pnpm install

# Iniciar en desarrollo
$ dev
# Iniciar en produccion
$ build
$ start
```

## Rutas

- /kpis
- /products
- /transactions

## Docker
Para crear un container con la base de datos solo es necesario correr este comando en la consola:
```bash
$ docker-compose up -d
```

## Creditos

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/es/)
- [CORS](https://github.com/expressjs/cors)
- [Mongoose](https://mongoosejs.com/)

## Licencia

MIT

---

> GitHub [@Sebmm3010](https://github.com/Sebmm3010) &nbsp;&middot;&nbsp;
> Twitter [@M1999Sebastian](https://twitter.com/M1999Sebastian)
