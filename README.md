# Repaso PI

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.

## Comenzando

1. Forkear el repositorio para tener una copia del mismo en sus cuentas
2. Clonar el repositorio en sus computadoras para comenzar a trabajar

**IMPORTANTE**: Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

Node: 12.18.3 o mayor
NPM: 6.14.16 o mayor
Para verificar que versión tienen instalada:

```
node -v

npm -v
```

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos con el nombre **pirepaso**.

El contenido de `client` fue creado usando: Create React App.

## Enunciado

# Rick & Morty App

En este ejercicio vamos a crear una APP que utilice la API de [Rick y Morty](https://rickandmortyapi.com//). Vamos a crear nuestra app utilizando **REACT** y **REDUX**.

Con tu App podremos:

- Listar los personajes: En la pàgina principal, mostrar solo: -id y -title de los personajes
- Al hacer click en cada personaje: mostrar -body y los episodios en los que aparece.
- Se debe poder agregar nuevos episodios a cada personaje

### Backend

El backend tendrá los siquientes modelos:

Personaje:

- id
- name
- image

Category:

- id
- name

User:

- id
- name
- username
- email

La relación de usuario con post es de 1 a n: ya que un mismo usuario puede escribir varios post. La relación de post con categorías es de n a n, ya que un post puede tener varias categorías asociadas y las categorías pueden ser compartidas por varios posts.
