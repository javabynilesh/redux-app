import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { legacy_createStore as createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";

var defaultBalance = 0;

//reducer
let balanceReducer = (state = defaultBalance, action) => {
    console.log("Reducer is called with state & action: ", state, action);
    switch (action.type) {
        case "DEPOSIT":
            return state + 100;
        case "WITHDRAW":
            return state - 100;
        default:
            return state;
    }
  };

//store
let store = createStore(balanceReducer, composeWithDevTools()); //when we create store, automatically reducer is called once and default state is set
console.log("Initial balance: ", store.getState());

//dispatch  //if want to update sate , we have to pass action to store by using a predefine function called dispatch
store.dispatch({type: "abc"});
//invoke the reducer automatically
console.log(store.getState());//0

store.dispatch({type: "DEPOSIT"});
console.log(store.getState());//100

store.dispatch({type: "DEPOSIT"});
console.log(store.getState());//100 + 100 = 200

store.dispatch({type: "WITHDRAW"});
console.log(store.getState());//200 - 100 = 100

ReactDOM.render(<App/>, document.getElementById("root"));
