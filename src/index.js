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
            return state + action.payload.amount;
        case "WITHDRAW":
            return state - action.payload.amount;
        default:
            return state;
    }
  };

//store
let store = createStore(balanceReducer, composeWithDevTools()); //when we create store, automatically reducer is called once and default state is set
store.subscribe(()=>{
    console.log(store.getState()); //get updated state
});

//dispatch  //if want to update sate , we have to pass action to store by using a predefine function called dispatch
//invoke the reducer automatically

store.dispatch({type: "DEPOSIT", payload: {amount :1000}});

store.dispatch({type: "DEPOSIT", payload: {amount :450}});

store.dispatch({type: "WITHDRAW", payload: {amount :250}});

ReactDOM.render(<App/>, document.getElementById("root"));
