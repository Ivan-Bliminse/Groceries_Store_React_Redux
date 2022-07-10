import { createStore } from 'redux';



const initialState = {
    price: 0,
    amountChicken: 0,
    amountPork: 0,
    amountBeef: 0,
    amountFalafel: 0,
    test: {
        abc: 0
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        // MEAT CASE

        case "CHICKEN":
            return {
                ...state,
                price: state.price + action.payload,
                amountChicken: state.amountChicken + action.amount
            }
        case "PORK":
            return {
                ...state,
                price: state.price + action.payload,
                amountPork: state.amountPork + action.amount
            }
        case "BEEF":
            return {
                ...state,
                price: state.price + action.payload,
                amountBeef: state.amountBeef + action.amount
            }
        case "FALAFEL":
            return {
                ...state,
                price: state.price + action.payload,
                amountFalafel: state.amountFalafel + action.amount
            }


        // DELETE MEAT CASE:

        case "DELETE_CHICKEN":
            return {
                ...state,
                price: state.price - action.payload,
                amountChicken: state.amountChicken - action.amount
            }
        case 'DELETE_PORK':
            return {
                ...state,
                price: state.price - action.payload,
                amountPork: state.amountPork - action.amount
            }
        case 'DELETE_BEEF':
            return {
                ...state,
                price: state.price - action.payload,
                amountBeef: state.amountBeef - action.amount
            }
        case 'DELETE_FALAFEL':
            return {
                ...state,
                price: state.price - action.payload,
                amountFalafel: state.amountFalafel - action.amount
            }

        // RESET CART CASE

        case "RESET":
            return {
                ...state,
                price: 0,
                amountChicken: 0,
                amountPork: 0,
                amountBeef: 0,
                amountFalafel: 0,

            }
        default:
            return state;
    }
}



export const store = createStore(reducer)