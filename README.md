# Proyecto Backend Videoclub

API desplegada en Heroku: https://rgg-backend-videoclub.herokuapp.com/

## TECNOLOGIAS IMPLEMENTADAS:
![image](https://user-images.githubusercontent.com/16636086/138780246-dc69ba86-c111-42e6-8079-35ffeba723f9.png)

## COMANDOS
<br>

```
1) Instalar librerías/dependencias necesarias que requiere la API --> npm install

2) Crear la base de datos que utilizará la API --> sequelize db:create
3) Crear la estructura de tablas de la base de datos --> sequelize db:migrate
4) Rellena las tablas de la base de datos con los seeders --> sequelize db:seed:all

En caso de de error al migrar las tablas o los seeders se utilizarán los siguientes comandos:
TABLAS --> sequelize db:migrate:undo:all
SEEDERS --> sequelize db:seed:undo:all 
```

## END-POINTS

```
#### INICIO
GET - localhost:3000 // "Bienvenidos al backend del videoclub"

#### Login Admin
POST - localhost:3000/users/signin - { "email": "rafa@mail.com",  "password": "rafa" }

#### Login User
POST - localhost:3000/users/signin - { "email": "george@mail.com",  "password": "george" }

#### Register
POST - localhost:3000/users/signup - { "name": "-", "email": "-", "password": "-", "city": "-" }

#### Movies
GET - localhost:3000/movies -- Muestras todas las películas de la base de datos.
GET - localhost:3000/movies/id -- Búsqueda de película por ID.
GET - localhost:3000/movies/title -- Búsqueda de película por título.
GET - localhost:3000/movies/genre/ -- Búsqueda de películas por género.
GET - localhost:3000/movies/cast/ -- Búsqueda de películas por reparto.
GET - localhost:3000/movies/city/ -- Búsqueda de películas por ciudad.
POST - localhost:3000/movies -- Añade una película a la base de datos (Requiere permisos de Admin).
DELETE - localhost:3000/movies -- Elimina todas las películas de la base de datos (Requiere permisos de Admin).
DELETE - localhost:3000/movies/id // Elimina la película seleccionada por ID (Requiere permisos de Admin).
```
```
#### Users
GET - localhost:3000/users -- Muestra todos los usuarios de la base de datos (Requiere permisos de Admin).
GET - localhost:3000/users/id -- Búsqueda de usuario por ID (Requiere permisos de Admin).
GET - localhost:3000/users/city/ -- Búsqueda de usuario por ciudad (Requiere permisos de Admin).
POST - localhost:3000/users/signup -- Crea un nuevo usuario en la base de datos y le genera un token de acceso para poder utilizar la API.
POST - localhost:3000/users/signin -- Inicia la sesión de un usuario, lo que permitirá recibir el token de acceso para poder utilizar la API.
DELETE - localhost:3000/users -- Elimina todos los usuarios de la DB (Requiere permisos de Admin).
DELETE - localhost:3000/users/id -- Elimina el usuario seleccionado por ID (Requiere permisos de Admin).
```
```
#### Orders
GET - localhost:3000/orders -- Busca todos los pedidos en la base de datos (Requiere permisos de Admin).
GET - localhost:3000/orders/id -- Busca un pedido por su ID (Requiere permisos de Admin).
POST - localhost:3000/orders -- Crea un nuevo pedido en la base de datos. Para generarse el pedido tendrá que coincidir la ciudad del usuario y la disponibilidad de la película (Requiere permisos de Admin).
DELETE - localhost:3000/orders -- Elimina todos los pedidos de la base de datos (Requiere permisos de Admin).
DELETE - localhost:3000/orders/ID -- Elimina el pedido seleccionado por ID (Requiere permisos de Admin).
```
