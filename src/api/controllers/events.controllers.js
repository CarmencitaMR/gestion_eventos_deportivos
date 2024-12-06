const Events = require("../models/events.model");



const createEvent = async (req, res) => {


    try {

        //compruebo si el usuario ha sido introducido
        const newEvent = new Events(req.body);

        if (!newEvent.name) {
            return res.status(400).json({ message: "El campo de nombre es obligatorio, por favor ingrese un nobre para el evento" });
        }

        //compruebo si la fecha ha sido introducida
        if (!newEvent.date) {
            return res.status(400).json({ message: "El campo de fecha es obligatorio, por favor ingrese la fecha del evento" });
        }

        //compruebo si el evento ya existe en la BD
        const eventDB = await Events.find({ name: newEvent.name });
        if (eventDB.length !== 0) {
            return res.status(400).json({ message: "El evento ya existe" });
        }
        //si existe es que cloudinay me ha genrado correctamente la url
        if (req.file.path) {
            console.log(req.file.path);
            newEvent.image = req.file.path;
        }

        const createEvent = await newEvent.save();
        return res.status(201).json(createEvent);

    } catch (error) {

        return res.status(500).json({ message: "Error en el servidor", error: error });
    }

};


const getAllEvents = async (req, res) => {

    try {

        // busca un listado completo de todos los eventos  con todos los campos del evento.
        const allEvents = await Events.find();
        return res.status(200).json(allEvents);

    } catch (error) {

        return res.status(500).json({ message: "Error en el servidor", error: error });
    }

};

const getEventById = async (req, res) => {

    try {

        const id = req.params.id

        // Verificar que el ID no sea nulo o indefinido
        if (!id) {
            return res.status(400).json({ message: "Necesita proporcional un ID" });
        }
        // busca el evento que corresponda al id enviado por la url
        const eventById = await Events.findById(id);
        return res.status(200).json(eventById);

    } catch (error) {

        return res.status(500).json({ message: "Error en el servidor", error: error });
    }

};

const deleteEventById = async (req, res) => {

    try {

        const id = req.params.id

        // Verificar si el id enviado en la url coincide con el id de una evento en la BD
        const eventDB = await Events.find({_id: id});
        if (eventDB.length === 0) {
            return res.status(400).json({ message: "No existe un evento con ese ID" });
        }

        // busca el evento que corresponda al id enviado por la url y lo elimina
        const eventById = await Events.findByIdAndDelete(id);
    
        return res.status(200).json({message: `El evento ${eventById.name} se ha eliminado con éxito`});

    } catch (error) {

        return res.status(500).json({ message: "Error en el servidor", error: error });
    }

};

const updateEventById = async (req, res) => {
    console.log("update");
    try{
        const id = req.params.id;
        const event = req.body;

        const updatedEvent = await Events.findByIdAndUpdate(id, event, {new:true});
        return res.status(200).json({message: `El evento ${updatedEvent.id} se ha modificado con éxito`, updatedEvent});

    }catch(error){

        return res.status(500).json({ message: "Error en el servidor", error: error });    
    }
};



module.exports = { createEvent, getAllEvents, getEventById, deleteEventById, updateEventById };