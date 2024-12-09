# API Events

## Creación de un nuevo evento

URL: /api/events

MÉTODO: POST

HEADERS: {Content-Type: application/json, "Authorization": "Bearer TOKEN"}

BODY: name, description, date, location, sport, image

Respuesta:

- Responde con un objeto con los datos del evento creado, con las urls de la imagenes alojadas en Cloudinary, el \_id generado y el \_id del organizador que ha creado el evento.

```json
{
  "_id": "675567452ffa77c2d041e187",
  "name": "VI Campeonato Patinaje Artístico",
  "description": "Campeonato de Patinaje Artítico todas las modalidades",
  "date": "2025-02-28T00:00:00.000Z",
  "location": "Madrid",
  "sport": "Patinaje Artístico",
  "image": [
    "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733650243/img_events/e9787wn3gwovi8dvidu4.png",
    "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733650245/img_events/kkdv4mntq80fz729qecj.png",
    "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733650244/img_events/hxqxsxad9ydpjkgvnrbs.png"
  ],
  "organizer": "6752def53a33cc62413a3451",
  "createdAt": "2024-12-08T09:30:45.640Z",
  "updatedAt": "2024-12-08T09:30:45.640Z",
  "__v": 0
}
```

## Recuperación de todos los eventos

URL: /api/events/getAllEvents

MÉTODO: GET

HEADERS: Authorization: "Bearer TOKEN"

Respuesta:

- Un array de objetos con todos los eventos y sus datos

```json
[
  {
    "_id": "67546c4c4d9182ce3a3e7eab",
    "name": "V Exhibición Acrobacias",
    "description": "Exhibición de acrobacias ",
    "date": "2025-08-09T00:00:00.000Z",
    "location": "Madrid",
    "sport": "Acrobacias",
    "image": [
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733585994/img_events/xm9px9yxjgm4ghabg6uq.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733585995/img_events/tvux7jbg2qqhupc4hu1v.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733585995/img_events/iv1uu5qzwtg5eet2mpm0.png"
    ],
    "organizer": "67517c479726947450a67adc",
    "createdAt": "2024-12-07T15:39:56.111Z",
    "updatedAt": "2024-12-07T15:39:56.111Z",
    "__v": 0
  },
  {
    "_id": "67546e1928fde1c56edc9f8e",
    "name": "VI Encuentro de Piraguismo en tu ciudad",
    "description": "Piraguismo en tu ciudad",
    "date": "2025-01-30T00:00:00.000Z",
    "location": "Madrid",
    "sport": "Piraguismo",
    "image": [
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586455/img_events/hju6lckdlendqphk3t84.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586456/img_events/kwiykm2iq4u19xpwctrk.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586456/img_events/nuaqhxggeombtof85chy.png"
    ],
    "organizer": "6752def53a33cc62413a3451",
    "createdAt": "2024-12-07T15:47:37.172Z",
    "updatedAt": "2024-12-07T15:47:37.172Z",
    "__v": 0
  }
]
```

## Recuperación de un evento por su ID

URL: /api/events/getEventById/:id

req.params.id -> ID del evento a recuperar

MÉTODO: GET

HEADERS: Authorization: "Bearer TOKEN"

Respuesta:

- Un objeto con todos los datos del evento buscado por su id

```json
{
  "_id": "67546f2428fde1c56edc9f92",
  "name": "III Torneo de Esgrima",
  "description": "Torneo de Esgrima",
  "date": "2025-02-25T00:00:00.000Z",
  "location": "Madrid",
  "sport": "Esgrima",
  "image": [
    "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586722/img_events/ogo8fvgkds3fevyt0unk.png",
    "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586723/img_events/fdwt6izqz4dvozxxrdui.png",
    "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586724/img_events/dmeiwm1ztv2ybh2h9b7w.png"
  ],
  "organizer": "6752def53a33cc62413a3451",
  "createdAt": "2024-12-07T15:52:04.863Z",
  "updatedAt": "2024-12-07T15:52:04.863Z",
  "__v": 0
}
```

## Actulización de un evento por su ID

URL: /api/events/:id

req.params.id -> ID del evento a actualizar

MÉTODO: PUT

HEADERS: {Content-Type: application/json, "Authorization": "Bearer TOKEN"}

BODY: las propiedades que quiera actualizar. Ejemplo name, description

Respuesta:

- Un objeto con el mensaje y el evento buscado por su id actualizado

```json
{
  "message": "El evento 675583d7db54243bb6c116e8 se ha modificado con éxito",
  "updatedEvent": {
    "_id": "675583d7db54243bb6c116e8",
    "name": "V Torneo Anual de Esgrima",
    "description": " Torneo anual de Esgrima",
    "date": "2025-02-28T00:00:00.000Z",
    "location": "Madrid",
    "sport": "Esgrima",
    "image": [
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733657557/img_events/crzqnyda4xrgvqvy40ew.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733657558/img_events/fj3ijvhqxelyagqiizdh.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733657558/img_events/kzimpqsex50knwcsfmj8.png"
    ],
    "organizer": "67517c479726947450a67adc",
    "createdAt": "2024-12-08T11:32:39.515Z",
    "updatedAt": "2024-12-08T11:39:37.933Z",
    "__v": 0
  }
}
```

## Borrado de un evento por su ID

URL: /api/events/:id

req.params.id -> ID del cliente a eliminar

MÉTODO: DELETE

HEADERS: "Authorization": "Bearer TOKEN DEL ADMIN"

Respuesta:

- Un objeto con el mensaje de elminación del evento seleccionado por ID

```json
{
  "message": "El evento III Campeonato Patinaje Artístico se ha eliminado con éxito"
}
```

## Recuperación eventos proximos

URL: /api/events/upcoming

MÉTODO: GET

Respuesta:

- Un array de objetos con los eventos y datos de \_id, name, description y date de los eventos más proximos, limitado a 3 resultados.

```json
[
  {
    "_id": "67546e1928fde1c56edc9f8e",
    "name": "VI Encuentro de Piraguismo en tu ciudad",
    "description": "Piraguismo en tu ciudad",
    "date": "2025-01-30T00:00:00.000Z"
  },
  {
    "_id": "67546f2428fde1c56edc9f92",
    "name": "III Torneo de Esgrima",
    "description": "Torno de Esgrima",
    "date": "2025-02-25T00:00:00.000Z"
  },
  {
    "_id": "6754727228fde1c56edc9fad",
    "name": "II Campeonato Patinaje Artístico",
    "description": "Campeonato de Patinaje Artítico todas las modalidades",
    "date": "2025-02-28T00:00:00.000Z"
  }
]
```

## Recuperación eventos por tipo de deporte

URL: /api/events/sport

req.query.sport -> deporte a buscar admite consultas flexibles con coincidencias en el campo sport

MÉTODO: GET

Respuesta:

- Un objeto o array de objetos con el o los eventos y datos del evento o de los eventos que contengan en el campo sport el texto enviado por los query params.

```json
[
  {
    "_id": "67546f2428fde1c56edc9f92",
    "name": "III Torneo de Esgrima",
    "description": "Torneo de Esgrima",
    "date": "2025-02-25T00:00:00.000Z",
    "location": "Madrid",
    "sport": "Esgrima",
    "image": [
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586722/img_events/ogo8fvgkds3fevyt0unk.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586723/img_events/fdwt6izqz4dvozxxrdui.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586724/img_events/dmeiwm1ztv2ybh2h9b7w.png"
    ],
    "organizer": "6752def53a33cc62413a3451",
    "createdAt": "2024-12-07T15:52:04.863Z",
    "updatedAt": "2024-12-07T15:52:04.863Z",
    "__v": 0
  },
  {
    "_id": "675583d7db54243bb6c116e8",
    "name": "V Torneo Anual de Esgrima",
    "description": " Torneo anual de Esgrima",
    "date": "2025-02-28T00:00:00.000Z",
    "location": "Madrid",
    "sport": "Esgrima",
    "image": [
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733657557/img_events/crzqnyda4xrgvqvy40ew.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733657558/img_events/fj3ijvhqxelyagqiizdh.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733657558/img_events/kzimpqsex50knwcsfmj8.png"
    ],
    "organizer": "67517c479726947450a67adc",
    "createdAt": "2024-12-08T11:32:39.515Z",
    "updatedAt": "2024-12-08T11:39:37.933Z",
    "__v": 0
  }
]
```

## Recuperación eventos por tipo rango de fechas

URL: /api/events/date

req.query.from-> fecha desde la que se quiere buscar

req.query.to-> fecha hasta la que se quiere buscar

MÉTODO: GET

Respuesta:

- Un objeto o array de objetos con el o los eventos y datos del evento o de los eventos contenidos entre las fechas indicadas. Ejempo: from 2025-02-01 to: 202445-02-30

```json
[
  {
    "_id": "67546f2428fde1c56edc9f92",
    "name": "III Torneo de Esgrima",
    "description": "Torno de Esgrima",
    "date": "2025-02-25T00:00:00.000Z",
    "location": "Madrid",
    "sport": "Esgrima",
    "image": [
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586722/img_events/ogo8fvgkds3fevyt0unk.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586723/img_events/fdwt6izqz4dvozxxrdui.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733586724/img_events/dmeiwm1ztv2ybh2h9b7w.png"
    ],
    "organizer": "6752def53a33cc62413a3451",
    "createdAt": "2024-12-07T15:52:04.863Z",
    "updatedAt": "2024-12-07T15:52:04.863Z",
    "__v": 0
  },
  {
    "_id": "6754727228fde1c56edc9fad",
    "name": "II Campeonato Patinaje Artístico",
    "description": "Campeonato de Patinaje Artítico todas las modalidades",
    "date": "2025-02-28T00:00:00.000Z",
    "location": "Madrid",
    "sport": "Patinaje Artístico",
    "image": [
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733587567/img_events/mjq3mbulbcazc7jrr7sr.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733587568/img_events/hfzk8va3mky5qea1wesx.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733587569/img_events/roqrnbpzqgs2tq77vowi.png"
    ],
    "organizer": "67517a732800269dcf063f34",
    "createdAt": "2024-12-07T16:06:10.171Z",
    "updatedAt": "2024-12-07T16:06:10.171Z",
    "__v": 0
  },
  {
    "_id": "675567452ffa77c2d041e187",
    "name": "VI Campeonato Patinaje Artístico",
    "description": "Campeonato de Patinaje Artítico todas las modalidades",
    "date": "2025-02-28T00:00:00.000Z",
    "location": "Madrid",
    "sport": "Patinaje Artístico",
    "image": [
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733650243/img_events/e9787wn3gwovi8dvidu4.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733650245/img_events/kkdv4mntq80fz729qecj.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733650244/img_events/hxqxsxad9ydpjkgvnrbs.png"
    ],
    "organizer": "6752def53a33cc62413a3451",
    "createdAt": "2024-12-08T09:30:45.640Z",
    "updatedAt": "2024-12-08T09:30:45.640Z",
    "__v": 0
  },
  {
    "_id": "675583d7db54243bb6c116e8",
    "name": "V Torneo Anual de Esgrima",
    "description": " Torneo anual de Esgrima",
    "date": "2025-02-28T00:00:00.000Z",
    "location": "Madrid",
    "sport": "Esgrima",
    "image": [
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733657557/img_events/crzqnyda4xrgvqvy40ew.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733657558/img_events/fj3ijvhqxelyagqiizdh.png",
      "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733657558/img_events/kzimpqsex50knwcsfmj8.png"
    ],
    "organizer": "67517c479726947450a67adc",
    "createdAt": "2024-12-08T11:32:39.515Z",
    "updatedAt": "2024-12-08T11:39:37.933Z",
    "__v": 0
  }
]
```

# Creación del CRUD

- [x] Generación fichero routes/routes.js
- [x] Generación fichero routers/api_routers/events.routes.js
- [x] Desde routers/api_routers/events.routes.js mandamos todas las peticiones a routes/routes.js
- [x] Generación fichero controllers/events.controllers con las funciones que se ejecutarán en los endpoint definidos en routers/api_routers/events.routes.js
- [x] Desde index.js mandamos todas las peticiones que empiezan por api/ y enlazan a su vez con events/ en el fichero routes/routes.js que a su vez enlazan con los endpoints definidos en el fichero/api_routers/events.routes.js

# A tener en cuenta

- El número máximo de imganes a subir por evento son 3
- Se necesara tener el role de Admin para poder realizar el DELETE del CRUD
