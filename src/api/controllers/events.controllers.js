const Events = require("../models/events.model");



const createEvent = async (req, res) => {

    try {

        //compruebo si el usuario ha sido introducido
        const newEvent = new Events(req.body);

        if (!newEvent.name) {
            return res.status(400).json({ message: "El campo de nombre es obligatorio, por favor ingrese un nobre para el evento" });
        }

        //compruebo si el evento ya existe en la BD
        const eventDB = await Events.find({ name: newEvent.name });
        if (eventDB.length !== 0) {
            return res.status(400).json({ message: "El evento ya existe" });
        }

         // Validación de la fecha
        if (!newEvent.date) {
            return res.status(400).json({ message: "El campo de fecha es obligatorio, por favor ingrese una fecha con formato año, mes, día: 2024-12-01" });
        }

        //si existen es que cloudinay me ha genrado correctamente la urls
        const imageUrls = req.files.map(file => file.path); // Obtiene las URLs de las imágenes subidas
        newEvent.image = imageUrls;

        // asigno el id del usuario logado para crear este evento al campo organizer que esta relacionado con la collecion users en el modelo de datos
        newEvent.organizer = req.user.id;
        
        //creo el evento en la BD
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
    
        const eventDB = await Events.find({ _id: id });
        if (eventDB.length === 0) {
            return res.status(404).json({ message: "No existe un evento con ese ID" });
        }

        // busca el evento que corresponda al id enviado por la url y lo elimina
        const eventById = await Events.findByIdAndDelete(id);

        return res.status(200).json({ message: `El evento ${eventById.name} se ha eliminado con éxito` });

    } catch (error) {

        return res.status(500).json({ message: "Error en el servidor", error: error });
    }

};

const updateEventById = async (req, res) => {
    console.log("update");
    try {
        const id = req.params.id;
        const event = req.body;


        // Verificar si el id enviado en la url coincide con el id de una evento en la BD
        const idDB = await Events.find({ _id: id });
        if (idDB.length === 0) {
            return res.status(404).json({ message: "No existe un evento con ese ID" });
        }

        // busca el evento que corresponda al id enviado por la url y lo actuliza con los datos guardado en la variable event que llegan por el body
        const updatedEvent = await Events.findByIdAndUpdate(id, event, { new: true });
        return res.status(200).json({ message: `El evento ${updatedEvent.id} se ha modificado con éxito`, updatedEvent });

    } catch (error) {

        return res.status(500).json({ message: "Error en el servidor", error: error });
    }
};

const getUpcomingEvents = async (req, res) => {

    console.log("getUpcomingEvents");

    try {
    
    // busca en la BD los eventos mostrando _id, name, description y date ordenados de manera ascendente y devolviendo los los 3 primeros, por lo que devuelve los eventos próximos.
    const filteredUpcomingEvents = await Events.find({}, {_id: 1, name: 1, description: 1, date: 1}).sort({date: 1}).limit (3);
    // si el array esta´vacío es que no hay eventos en la BD
    if(!filteredUpcomingEvents){
        return res.status(404).json({ message: "No hay eventos próximos en para las próximas fechas" });
    }
    return res.status(200).json(filteredUpcomingEvents);

    }catch (error) {

        return res.status(500).json({ message: "Error en el servidor", error: error });
   }
};

const getBySportType = async (req, res) => {

    console.log("getBySportType");

    try {
        
        //envío los parametros por query params
        const sport = req.query.sport;

        //verifico que se ha enviado un parametro
        if (!sport) {
            return res.status(400).json({ message: "El parámetro sport es obligatorio" });
        }

        //busco en la BD si exíste el deporte
        const filtedEvent = await Events.find({ sport: { $regex: sport, $options: "i" } });

        //si me devuelve el array vacío es que no existe
        if (filtedEvent.length === 0) {
            return res.status(404).json({ message: "El tipo de deporte no existe" });
        }
        
        return res.status(200).json(filtedEvent);

    } catch (error) {

        return res.status(500).json({ message: "Error en el servidor", error: error });
    }
};

const getByDateRange = async (req, res) =>{
    console.log("getByDateRange");

    const { from, to } = req.query;

    // Validar que se recibieron las fechas
    if (!from || !to) {
        return res.status(400).json({ error: 'Se necesitan los parametros del rango de fechas from y to' });
    }

    const filteredDates = await Events.find({
        date: {
            $gte: from,
            $lte: to
        }
    });
    return res.status(200).json(filteredDates);

};





module.exports = { createEvent, getAllEvents, getEventById, deleteEventById, updateEventById, getBySportType, getByDateRange, getUpcomingEvents };