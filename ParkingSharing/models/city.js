const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { MODEL_NAMES } = require('../constants/db.js');

const  cityScheme = new Schema({
    name:  { type: String, required: true }
});



cityScheme.statics = {
    createCity(city){
        let City = this;
        let forCity = {
            name: city.name
        };
        let newCity = new City(forCity);

        return newCity.save();
    }
};


exports.City = mongoose.model(MODEL_NAMES.CITY, cityScheme);