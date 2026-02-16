import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { legacy_createStore as createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import * as ActionTypeConstant from './ActionTypeConstant';
var defaultBalance = 0;

//action creator
let deposite = (amount) =>{
    return {type: ActionTypeConstant.DEPOSIT, payload: {amount:amount}};
};

let withdraw = (amount) =>{
    return {type: ActionTypeConstant.WITHDRAW, payload: {amount:amount}};
};

//reducer
let balanceReducer = (state = defaultBalance, action) => {
    console.log("Reducer is called with state & action: ", state, action);
    switch (action.type) {
        case ActionTypeConstant.DEPOSIT:
            return state + action.payload.amount;
        case ActionTypeConstant.WITHDRAW:
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

store.dispatch(deposite(1000));

store.dispatch(deposite(450));

store.dispatch(withdraw(250));

ReactDOM.render(<App/>, document.getElementById("root"));
