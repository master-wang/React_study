import {createStore,compose,applyMiddleware} from 'redux'
// redux 做网络异步请求 需要 redux-thunk 中间件
import thunk from 'redux-thunk'
// redux 三个重要部分  action reducer store
import { combinState } from '../reducers/index'

const store = createStore(combinState,compose(applyMiddleware(...[thunk]))) // 需要使用的中间件数组配置

export default store