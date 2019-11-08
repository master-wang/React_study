import React,{ Component } from 'react'
import { HashRouter  , Route,Link} from 'react-router-dom'
import HomePage from './components/HomePage'
import MyApp from './components/MyApp'
class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className="base">
          <header>
            <p>React Router v4 Browser Example</p>
            <button className="btn btn-danger">bootstrap</button>
            <nav>
              <ul>
                <li><Link  to="/home"> Home </Link> </li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
          </header>
          <div className="container">
              router内容:
              {/* 在Route 上加入 exact 有让该路由在匹配自路由时,该路由不显示,exact 的作用是只能匹配一个对于自己完全一样的路由,比如/a 显示 当变成 /a/ss是  /a的路由不起作用 */}
            <Route path="/home" component={HomePage} ></Route>
            <Route path="/about" component={MyApp}></Route>
          </div>
          <footer>
              底部:
            React Router v4 Browser Example 
          </footer>
        </div>
      </HashRouter>
    )
  }
}
export default App