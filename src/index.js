import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import * as serviceWorker from './serviceWorker';
// 全封装拆分好了 只用导出store 和 action
import store from './store/store'
//import { countAddAction } from './actions/counter_action'
//import { loadPostsAction } from './actions/post_action'


// redux自己的单独使用使用
// console.log(store)
// console.log(store.getState())
// //
// store.dispatch(countAddAction)
// console.log(store)
// console.log(store.getState())
// store.dispatch(loadPostsAction)

// redux 与react的结合  通过 react-redux



// 没有子节点则可以使用闭合标签
// ReactDOM.render(<App store ={store} MakeMoney = {MakeMoney} SpendMoney={SpendMoney}/>, document.getElementById('root'));
// 通过provide 提供容器吧redux和react链接,将store传递到 react项目中

ReactDOM.render(<Provider store={store}>
        <App></App>
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
