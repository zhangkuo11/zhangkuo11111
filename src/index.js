import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
//1.创建reducer函数
const reducer = (state=0,action) => {
    console.log("reducer函数被调用了");
    switch(action.type){
        case "ADD":
            return state+1;
        case "SUB":
            return state-1;
        default:
            return state;
    }
}

//2.创建全局store
const store = createStore(reducer);
//3.获取store中的当前的state
console.log(store.getState());
    ReactDOM.render(
       <Provider store={store}>
            <App name="tom" age="19"/>
       </Provider>,
        document.getElementById("app")
    )



