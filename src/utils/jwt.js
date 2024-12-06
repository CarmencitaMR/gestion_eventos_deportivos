const jwt = require("jsonwebtoken");

/*creo el Token con la función sign de jwt que incluye:
 Los datos(objeto en este caso) que quiero que contenga el Token del usuario _id y email, 
 La contrseña que asigono para la creación del Token (variable de entrono) 
 Opcional añado el timpo que quiero que ese Token sea válido.*/

const createToken = (info) => {

    const data = {
        user_id: info._id,
        user_username: info.username
    }

    return jwt.sign(data, process.env.SECRET_KEY_JWT, { expiresIn: "30min" });

};

module.exports = { createToken };