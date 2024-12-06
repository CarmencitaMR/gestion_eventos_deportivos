const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema (
    

    {
        name: {type: String, require: true},
        description: {type: String, requiere: true}, 
        date: {type: Date, require: true},
        location: {type: String, require: true},
        sport: {type: String, require: true},
        organizer: {type: Schema.Types.ObjectId, ref: "users"},
        image: {type: String, default: '' },
    },

    {
        collection:"events", // 
        timestamps: true,
    }
);

const Events = mongoose.model("events", eventsSchema);
module.exports = Events;

    