import React, {createContext, useReducer} from 'react';

const initState = {
    transactions: [
        { custID: 1, accountKey: '', message: 'Flower', amount: 5}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    
}