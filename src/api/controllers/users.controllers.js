const Users = require("../models/users.model");
const bcryptjs = require ("bcryptjs");
const { createToken } = require("../../utils/jwt");


const register = async (req, res) => {

    console.log("register");

    try{
        //recibo los datos por el body
        const newUser = req.body;  

         //compruebo que el usuario ha sido introducido
         if (!newUser.username) {
            return res.status(400).json({ message: "El campo de username es obligatorio, por favor ingrese un username" });
       }

        //Valido que el email ha sido introducido y que tenga el formato definido de mail que especifiqué en el modelo de datos.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!newUser.email) {
             return res.status(400).json({ message: "El campo de correo electrónico es obligatorio, por favor ingrese un email" });
        }

        if (!emailRegex.test(newUser.email)) {
            return res.status(400).json({ message: "El formato de correo electrónico no es válido" });
        }

       //si el usuario ha sido introducido compruebo si existe en la BD
        const userDB = await Users.find({username: newUser.username});
        
        if (userDB.length !== 0){
            return res.status(400).json({message:"El usuario ya existe"});
        }

        //si el usuario ha sido introducido compruebo si existe en la BD
        const userMailDB = await Users.find({email: newUser.email});
        
        if (userMailDB.length !== 0){
            return res.status(400).json({message:"El email ya existe"});
        }

        //si el usuario no exite encripto la contraseño y creo el usuario en la BD
        newUser.password = await bcryptjs.hash(newUser.password, 10);
        const user = await Users.create(newUser);
        return res.status(201).json(user);

    } catch(error){

        return res.status(500).json({message:"Error en el servidor", error:error});
    }
};

const login = async (req, res) => {
    console.log("login");
    //recibo por el body el username y el password
    const { username, password } = req.body;
    // busco si el username existe en la BD, si no existe envio un mensaje avisando que ese usuario no exite, si existe comparo que el password enviado por el body y el password de ese usario en la BD coincidan, para ello necesito la función compare al estar el password encriptado en la BD.
    const userDB = await Users.findOne({username: username});

    if(!userDB){
        return res.status(400).json({message:"El usuario no existe"});
    }
    
    const samePassword = await bcryptjs.compare(password, userDB.password);
    // si la contrseña no coincide envío un mensjae avisándolo. Si existe creo el token con los datos de ese usuario.
    if(!samePassword){
        return res.status(400).json({message:"La contraseña no existe"});
    }

    return res.status(200).json({
        message:"El login se ha creado con éxito",
        token: createToken(userDB)    
    })   
};

const getProfile = async (req, res) => {
    console.log("getProfile");

    //busco al usuario por ID con los datos de id que me llegan del token en user(req.user) y los devuelvo como respuesta.
    try{
        const dataUser = await Users.findById({_id:req.user.id});
        return res.status(200).json(dataUser);
    }catch(error){
        return res.status(500).json({message:"Error en el servidor", error:error});
    }
};



module.exports = { register, login, getProfile };