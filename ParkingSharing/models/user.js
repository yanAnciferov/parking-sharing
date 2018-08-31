const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { MODEL_NAMES } = require('../constants/db.js');

const userScheme = new Schema({
    username: { type: String, required: true, unique: true },
    city:  { type: Schema.ObjectId, required: true, ref: MODEL_NAMES.CITY },
    firstname:  { type: String, required: true },
    lastname:  { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
});

userScheme.statics = {
    createUser(user){
        let User = this;
        let forNewUser = {
            username: user.username,
            city: user.city,
            firstname: user.firstname,
            lastname: user.lastname,
            isAdmin: user.isAdmin
        };
        let newUser = new User(forNewUser);

        return newUser.save();
    }
};

exports.User = mongoose.model(MODEL_NAMES.USER, userScheme);