import {CALENDAR_ACTION} from "../constants/actions";

export const CALENDAR_ACTION_CREATORS = {
    toggle(){
        return {
            type: CALENDAR_ACTION.CALENDAR_TOGGLE
        }
    },
    setSelectedDays(days){
        return {
            type: CALENDAR_ACTION.CALENDAR_SET_DAYS,
            days
        }
    },
    setFree(free){
        return {
            type: CALENDAR_ACTION.CALENDAR_SET_FREE,
            free
        }
    },
    setBorrow(borrow){
        return {
            type: CALENDAR_ACTION.CALENDAR_SET_BORROW,
            borrow
        }
    },
    setSimple(simple){
        return {
            type: CALENDAR_ACTION.CALENDAR_SET_SIMPLE,
            simple
        }
    }
};
