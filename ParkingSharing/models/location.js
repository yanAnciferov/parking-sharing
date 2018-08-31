const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { MODEL_NAMES } = require('../constants/db.js');

let  locationScheme = new Schema({
    name: { type: String, required: true, unique: true },
    city: { type: Schema.ObjectId, require: true, ref: MODEL_NAMES.CITY }
});



locationScheme.statics = {
    createLocation(location, callback){
        let Location = this;
        console.log(location);
        let forNewLocation = {
            name: location.name,
            city: location.cityId
        };
        let newLocation = new Location(forNewLocation);

        return newLocation.save();
    }
};


exports.Location = mongoose.model(MODEL_NAMES.LOCATION, locationScheme);