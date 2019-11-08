import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/menu.css'
// 高亮的样式，表示我们在哪个导航下
const selectedStyle = {
    backgroundColor: 'white',
    color: 'slategray'
  }
class Menu extends Component {
    render(){
        return (
            <div>
            <nav className='main-menu'>
                <NavLink to='/'>首页</NavLink>
                <NavLink to='/about' activeStyle = {selectedStyle}>关于我们</NavLink>
                <NavLink to='/events' activeStyle = {selectedStyle}>企业事件</NavLink>
                <NavLink to='/products' activeStyle = {selectedStyle}>公司产品</NavLink>
                <NavLink to='/contact' activeStyle = {selectedStyle} Component="6666666666666666666666">联系我们</NavLink>
            </nav>
            </div>
        )
    }
}
export default Menu