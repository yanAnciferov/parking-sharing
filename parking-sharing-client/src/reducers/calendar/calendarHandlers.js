export function toggle(state, action) {
    return {
        ...state,
        multiSelectMode: !state.multiSelectMode,
        selected: []
    }
}

export function calendarSetDays(state, action) {
    return {
        ...state,
        selected: action.days
    }
}


export function calendarSetFree(state, action) {
    let newFree = action.free.map((newFreeItem) => {return new Date(newFreeItem)});
    let {free, borrow} = state;
    newFree.forEach((newFreeItem) => {
        if(free.findIndex((freeItem)=>{ return dateCompareWithOutTime(freeItem, newFreeItem)  }) === -1){
            free.push(newFreeItem);
        }
        let borrowIndex = borrow.findIndex((freeItem)=>{ return dateCompareWithOutTime(freeItem, newFreeItem)  });
        if(borrowIndex !== -1){
            borrow.splice(borrowIndex, 1);
        }
    });

    return {
        ...state,
        free,
        borrow
    }
}


export function calendarSetBorrow(state, action) {
    console.log(action);
    let newBorrow = action.borrow.map((newBorrowItem) => {return new Date(newBorrowItem)});
    let {free, borrow} = state;
    newBorrow.forEach((newBorrowItem) => {
        if(borrow.findIndex((borrowItem)=>{ return dateCompareWithOutTime(borrowItem, newBorrowItem)  }) === -1){
            borrow.push(newBorrowItem);
        }
        let freeIndex = free.findIndex((freeItem)=>{ return dateCompareWithOutTime(freeItem, newBorrowItem)  });
        if(freeIndex !== -1){
            free.splice(freeIndex, 1);
        }
    });

    return {
        ...state,
        free,
        borrow
    }
}


export function calendarSetSimple(state, action) {
    let simpleDays = action.simple.map((newSimpleDay) => {return new Date(newSimpleDay)});
    let {free, borrow} = state;
    simpleDays.forEach((newSimpleDay) => {
        let borrowIndex = borrow.findIndex((borrowItem)=>{ return dateCompareWithOutTime(borrowItem, newSimpleDay)  });
        if(borrowIndex !== -1){
            borrow.splice(borrowIndex, 1);
        }
        let freeIndex = free.findIndex((freeItem)=>{ return dateCompareWithOutTime(freeItem, newSimpleDay)  });
        if(freeIndex !== -1){
            free.splice(freeIndex, 1);
        }
    });

    return {
        ...state,
        free,
        borrow
    }
}


function dateCompareWithOutTime(date1, date2) {
    return date1.getDate() === date2.getDate() &&
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth();
}