import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore, isAsyncThunkAction } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import App from './components/app';
import { Provider } from 'react-redux';

const f1=(state=0, action)=>{
  switch(action.type){
    case 'add':
      return state+action.value;
    case 'sub':
      return state-action.value;
    default:
      return state;
  }
}

const f2=(state="", action)=>{
  switch(action.type){
    case 'concat':
      return state+action.string;
    default:
      return state;
  }
}
const f3=combineReducers({
  number:f1,
  string:f2,
});


const store= configureStore({
  reducer:f3,
});

//store.subscribe(()=>{console.log(store.getState())});

store.dispatch({type:"add",value :1});
store.dispatch({type:"add",value :2});
store.dispatch({type:"add",value :3});
store.dispatch({type:"concat",string :"111"});
//console.log(store.getState());




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);


