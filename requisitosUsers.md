# API Users

## Creación de un nuevo usuario

URL: /api/users/register

MÉTODO: POST

HEADERS: Content-Type: application/json

BODY: name, lastname, username, email, password, role

Respuesta:

- Responde con un objeto con los datos del usuario registrado, el \_id generado y la contraseña encriptada. El rol por defecto es organizador, exite la opción de admin.

```json
{
  "name": "Ángel",
  "lastname": "Ballesteros",
  "username": "Angelito",
  "email": "angel@angeles.com",
  "password": "$2a$10$XcDBWZJn9ufZwZ8IFm.fL.dDJmcnq5txnhyqzFM42oS0CgvEz1jTW",
  "role": "organizador",
  "_id": "67556aa01077bfe71f5d0995",
  "createdAt": "2024-12-08T09:45:04.136Z",
  "updatedAt": "2024-12-08T09:45:04.136Z",
  "__v": 0
}
```

## Login usuario

URL: /api/users/login

MÉTODO: POST

HEADERS: Content-Type: application/json

BODY: username, password

- Respondo con un objeto con un mensaje y el token generado

```json
{
  "message": "El login se ha realizado con éxito",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1MmRlZjUzYTMzY2M2MjQxM2EzNDUxIiwidXNlcl91c2VybmFtZSI6IkNhcm1lbmNpdGEiLCJpYXQiOjE3MzM2NTMwMzcsImV4cCI6MTczMzY1NDgzN30.7v4unWXoeeT4vSRExD9Zr4veVOoD818mngm2aJsT1do"
}
```

## Recuperar el pelfil del usuario logeado

URL: /api/users/profile

MÉTODO: GET

HEADERS: Authorization: "Bearer TOKEN"

Respuesta:

- Responde con el objeto con los datos de perfil del usuario logado

```json
{
  "_id": "6752dc4cd0c69997aa4e593c",
  "name": "Escarlata",
  "lastname": "Castillo",
  "username": "Escarlatita",
  "email": "escarlata@escarlatitas.com",
  "password": "$2a$10$egccNfdM5iDY0vSAhQaFQ.rp.QmC4WDyUdKCg23vOTAkCVH6BVeBS",
  "role": "organizador",
  "createdAt": "2024-12-06T11:13:16.486Z",
  "updatedAt": "2024-12-06T11:13:16.486Z",
  "__v": 0
}
```

# A tener en cuenta

- el role está definido por defecto como organizador

- El tiempo de validez del Token está establecido en 30 min

- El endpoint api/users/profile es una ruta protegida
