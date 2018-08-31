const LOGIN = "/api/account/login";
const GET_AUTH_USER_DATA = "/api/account/getAuthUserData";
const GET_MY_PLACE = "/api/place/getMyPlace";
const GET_CITIES = "/api/location/getCities";
const GET_PLACES = "/api/location/getPlaces";
const GET_LOCATIONS = "/api/location/getLocations";
const DOMAIN = "http://localhost:3001";
const TAKE_PLACE = "/api/place/take";
const REJECT_PLACE = "/api/place/reject";
const BORROW_PLACE = "/api/place/borrow";
const LEAVE_PLACE = "/api/place/leave";
const CANCEL_LEAVING_PLACE = "/api/place/cancelLeaving";
const TEST = "/api/account/test";
const ADMIN_LOGIN = "/api/admin/login";
const GET_REQUESTS_FOR_TAKING = "/api/admin/getRequestsForTaking";
const ACCEPT_REQUESTS_FOR_TAKING = "/api/admin/acceptRequestsForTaking";
const REJECT_REQUESTS_FOR_TAKING = "/api/admin/rejectRequestsForTaking";
const GET_REQUESTS_FOR_LEAVING = "/api/admin/getRequestsForLeaving";
const ACCEPT_REQUESTS_FOR_LEAVING = "/api/admin/acceptRequestsForLeaving";
const REJECT_REQUESTS_FOR_LEAVING = "/api/admin/rejectRequestsForLeaving";

export {
    LOGIN,
    DOMAIN,
    GET_AUTH_USER_DATA,
    GET_CITIES,
    GET_LOCATIONS,
    GET_PLACES,
    GET_MY_PLACE,
    TAKE_PLACE,
    REJECT_PLACE,
    BORROW_PLACE,
    LEAVE_PLACE,
    CANCEL_LEAVING_PLACE,
    TEST,
    ADMIN_LOGIN,
    GET_REQUESTS_FOR_TAKING,
    ACCEPT_REQUESTS_FOR_TAKING,
    REJECT_REQUESTS_FOR_TAKING,
    GET_REQUESTS_FOR_LEAVING,
    ACCEPT_REQUESTS_FOR_LEAVING,
    REJECT_REQUESTS_FOR_LEAVING
}
