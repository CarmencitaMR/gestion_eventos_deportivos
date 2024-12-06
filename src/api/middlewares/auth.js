const jwt = require("jsonwebtoken");
const Users = require("../models/users.model");

const checkToken = async (req, res, next) => {

    //confirmo que me ha llegado por la propiedad headers del request un token.
    try {
        if (!req.headers["authorization"]) {
            return res.status(400).json({ message: "debe incluir el token" });
        }
        const token = req.headers["authorization"]

        //valido si el token esta creado con el algoritmo de jwt y lleva los daos y clave que indiqué en su creación.
        let data;
        const tokenVe = token.split(" ")[1];
        data = jwt.verify(tokenVe, process.env.SECRET_KEY_JWT);
        
        //busco al usuario del token en la BD
        const user = await Users.findById(data.user_id);

        if (!user) {
            return res.status(400).json({ message: "el usuario no exite" });
        }

        // si lo encuentra modifico el request(req) inicial que me ha enviado el usuario que llevaba el token para que lleve los datos del usuario que envió la petición a la función getProfile del users.controllers.Como el req es un objeto, le creo una propiedad en este caso .user y le doy valor, en este caso el usuario que he buscado por id en la BD que coincide con el user_id del token
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor", error: error });
    }
};


const checkTokenAdmin = async (req, res, next) => {

    //confirmo que me ha llegado por la propiedad headers del request un token.
    try {
        if (!req.headers["authorization"]) {
            return res.status(400).json({ message: "debe incluir el token" });
        }
        const token = req.headers["authorization"]

        //valido si el token esta creado con el algoritmo de jwt y lleva los daos y clave que indiqué en su creación.
        let data;
        const tokenVe = token.split(" ")[1];
        data = jwt.verify(tokenVe, process.env.SECRET_KEY_JWT);
        
        //busco al usuario del token en la BD
        const user = await Users.findById(data.user_id);

        if (!user) {
            return res.status(400).json({ message: "el usuario no exite" });
        }

        //conpruba si el role, ya que solo lo que tiene un role de admin pueden acceder a esta ruta privada
        if (user.role !== "admin"){
            return res.status(403).json({message: "Se necesita el role de Administrador para acceder a esta ruta"});
        }


        // si lo encuentra modifico el request(req) inicial que me ha enviado el usuario que llevaba el token para que lleve los datos del usuario que envió la petición a la función getProfile del users.controllers.Como el req es un objeto, le creo una propiedad en este caso .user y le doy valor, en este caso el usuario que he buscado por id en la BD que coincide con el user_id del token
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor", error: error });
    }
};


module.exports = { checkToken, checkTokenAdmin };