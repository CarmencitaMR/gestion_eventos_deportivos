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
  "name": "VII Campeonato Patinaje Artístico",
  "description": "Campeonato de Patinaje Artítico todas las modalidades",
  "date": "2025-02-28T00:00:00.000Z",
  "location": "Madrid",
  "sport": "Patinaje Artístico",
  "image": [
    "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733655018/img_events/pxhccaa3bwsgekcgynjo.png",
    "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733655018/img_events/c9nmy04p1njitokxtkxi.png",
    "https://res.cloudinary.com/dbpa0ihrj/image/upload/v1733655019/img_events/tztxhwbghbxz3hcje9vf.png"
  ],
  "_id": "675579ec9ee31f1c72b75ecf",
  "organizer": "6752dc4cd0c69997aa4e593c",
  "createdAt": "2024-12-08T10:50:20.371Z",
  "updatedAt": "2024-12-08T10:50:20.371Z",
  "__v": 0
}
```

## Recuperación de todos los eventos

URL: /api/events

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

URL: /api/events/:id
req.params.id -> ID del evento a recuperar

MÉTODO: GET

HEADERS: HEADERS: Authorization: "Bearer TOKEN"

Respuesta:

- Un objeto con todos los datos del evento buscado por su id

```json
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
}
```

## Actulización de un evento por su ID

URL: /api/events/:id

req.params.id -> ID del evento a actualizar

MÉTODO: PUT

HEADERS: {Content-Type: application/json, "Authorization": "Bearer TOKEN"}

BODY: las propiedad que quiera actulizadar. Ejemplo name, description

Respuesta:

- Un objeto con el mensaje y el evento buscado por su id actualilado

```json
//evento antes de la actuliazación
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
}

// evento actualizado
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

HEADERS: "Authorization": "Bearer TOKEN"

Respuesta:

- Un objeto con el mensaje y el evento buscado por su id actualilado

# A tener en cuenta

- No tenemos ningún fichero para monitores (rutas, controller, modelo)
- Hay que crear la ruta base /api/monitores (api.routes)
- Cuanto más trabajo hagamos en el modelo, más sencillo será el controlador (Fat Model Skinny Controller);

# Creación del CRUD

- [x] Generación fichero routes/api.routes.js
- [x] Desde app.js mandamos todas las peticiones que empiezan por /api al fichero anterior
- [x] Generación fichero routes/api/clientes.routes.js
- [x] Desde api.routes.js mandamos todas las peticiones que empiezan por /api/clientes al fichero anterior
- Generar el controlador, los métodos necesarios y las rutas en el fichero clientes.routes.js
