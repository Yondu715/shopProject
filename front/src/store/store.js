/*redux*/
import {createStore} from "redux";

const defaultState = {
    role : null,
    login : null,
    Prod : [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type){
        case "setRole":
            return{...state, role: action.payload}
        case "setLogin":
            return{...state, login: action.payload}
        case "setProducts":
            return{...state, Prod: action.payload}
        default:
            return state
    }
}

export const api = createStore(reducer);
/*redux*/