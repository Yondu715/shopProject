/*redux*/
import {createStore} from "redux";

const defaultState = {
    role : null,

    login : null,

    idProdA : null,

    idProdU : null,

    Prod : [],

    orderU : {
        prod : []
    },

    orderA : {
        prod : []
    }
}

const reducer = (state = defaultState, action) => {
    switch (action.type){
        case "setRole":
            return{...state, role: action.payload}
        case "setLogin":
            return{...state, login: action.payload}
        case "setProducts":
            return{...state, Prod: action.payload}
        case "setOrderU":
            return{...state, orderU: action.payload}
        case "setOrderA":
            return{...state, orderA: action.payload}
        case "setIdProdA":
            return{...state, idProdA: action.payload}
        case "setIdProdU":
            return{...state, idProdU: action.payload}
        default:
            return state
    }
}

export const api = createStore(reducer);
/*redux*/