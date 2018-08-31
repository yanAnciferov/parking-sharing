import {Button} from "reactstrap";
import React from "react";
import {STATE_FOR_DAY} from "../constants/modelFields";



function dayComparer(day1, day2){
    return day1.getDate() === day2.getDate()
}

export function  getButtonStateByArray(borrow, free, arr){
    let borrowCounter = 0;
    let freeCounter = 0;
    let simpleCounter = 0;
    arr.forEach((el) => {
        let state = getStateForDay(borrow, free, el);
        if(borrowCounter !== (borrowCounter += state === STATE_FOR_DAY.BORROW))
            return;
        if(freeCounter !== (freeCounter += state === STATE_FOR_DAY.RELEASE))
            return;
        simpleCounter++;
    });

    if(simpleCounter && !borrowCounter && !freeCounter) return <Button color="success">Release</Button>;
    if(freeCounter && !borrowCounter && !simpleCounter) return <Button>Cancel release</Button>;
    return null;
}

export function getStateForDay(borrow, free, day){
    if (-1 !== borrow.findIndex((borrowDay) => { return dayComparer(borrowDay, day)})){
        return STATE_FOR_DAY.BORROW;
    } else if(-1 !== free.findIndex((freeDay) => { return dayComparer(freeDay, day) })) {
        return STATE_FOR_DAY.RELEASE
    } else return STATE_FOR_DAY.FREE;
}


export function getToday(){
    return new Date(Date.now());
}


export function getTomorrow() {
    let tomorrow = new Date(Date.now());
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
}
