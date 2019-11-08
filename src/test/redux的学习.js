import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import { get } from 'axios'
// redux 做网络异步请求 需要 redux-thunk 中间件
import thunk from 'redux-thunk'
//import {counter,MakeMoney,SpendMoney} from './store/index.redux'
import './index.css';
import App from './App';
//import App from './components/App'
import * as serviceWorker from './serviceWorker';

//const store = createStore(counter)
// redux 三个重要部分  action reducer store
const countReducter = function(state = {
    count:1
},action){
    console.log(action)
    switch(action.type){
        case "COUNT_ADD":return{
            ...state,count:state.count +1
        }
        default : return {
            ...state
        }
    }
}
const postRecuter = function(state={list:[{title:"nihao"}]},action){
    switch (action.type){
        case 'LOAD_POSTS':
            return {
                ...state,list:action.payload
            }
        default :
            return state
    }
}
// 合并多个 reducer
const combinState = combineReducers({
    countReducter,
    postRecuter
})

const store = createStore(combinState,compose(applyMiddleware(...[thunk]))) // 需要使用的中间件数组配置
console.log(store)
console.log(store.getState())
//
store.dispatch({
    type:"COUNT_ADD",
    payload:{}
})
console.log(store)
console.log(store.getState())

const getPostRequest = () => {
    return get('http://jsonplaceholder.typicode.com/posts')
}

store.dispatch(async function(dispatch){
    const res = await getPostRequest();
    console.log(res.data)
    dispatch({
        type:'LOAD_POSTS',
        payload:res.data
    })
})




// 没有子节点则可以使用闭合标签
// ReactDOM.render(<App store ={store} MakeMoney = {MakeMoney} SpendMoney={SpendMoney}/>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
