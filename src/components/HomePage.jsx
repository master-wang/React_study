import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Menu from './Menu'
class HomePage extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>This is a Home AboutPage
                <h3>我是列表</h3>
                <ul>
                <li><Link to={`/home/a`}>a</Link></li>
                <li><Link to={`/home/router`}>b</Link></li>
                <li><Link to={`/home/redux`}>c</Link></li>
              </ul>
              <hr/>
              <Route path={`/home/a`} component={Menu}/>
              
            </div>
        );
    }
}
export default HomePage;