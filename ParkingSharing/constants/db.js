module.exports.MODEL_NAMES = {
    LOCATION: "LOCATION",
    PLACE: "PLACE",
    FREE_DATE: "FREE_DATE",
    USER: "USER",
    CITY: "CITY",
    PLACE_REQUEST: "PLACE_REQUEST",
    USER_PLACE: "USER_PLACE",
    ADMIN: "ADMIN"
};

module.exports.LOCATION = {
    NAME: "name"
};

module.exports.PLACE = {
    NUMBER: "number",
    ID_LOCATION: "id_location",
    ID_OWNER: "id_owner"
};

module.exports.FREE_DATE = {
    DATE: "date",
    ID_PLACE: "id_place",
    ID_OCCUPANT: "id_occupant"
};

module.exports.USER = {
    EMAIL: "email",
    NAME: "name",
    PASSWORD: "password"
};

module.exports.ENUM_USER_PLACE_STATES = {
    TAKEN:"taken", REQUESTING:"requesting", CANCELING: "canceling", BORROW: "borrow", BUSY: "busy" , FREE: "free"
};

module.exports.ENUM_PLACE_TYPES = {
    NORMAL: "NORMAL", MINI: "MINI", MOTORCYCLE: "MOTORCYCLE"
};