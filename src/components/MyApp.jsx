import React, {Component} from 'react';

//import {MakeMoney,SpendMoney} from '../store/index.redux'
import './App.css'
// 链接redux
import { connect } from 'react-redux'
import { loadPostsAction } from '../actions/post_action'

class MyApp extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    render() {
        console.log(this.props)
        const { postList:{list},counter } = this.props
        //console.log(this.props.a)
        
        return (
            <div>
                <h1 className="App-h1">我的react项目---获取redux的cointer :{counter.count}</h1>
          
                <h2>react获取远程数据--放在redux,并且应用在组件中链接redux</h2>
                <ul>
                    { list.map((item) => {
                        return <li key={item.id}>{item.title}</li>
                      })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.dispatch(loadPostsAction)
    }
}
const mapStateTpProps = (state,ownPrpps) => {//传入所有state，返回指定的state数据。
    console.log(ownPrpps)
    return {
        postList:state.postRecuter,
        counter:state.countReducter,
    }
}

// const mapDispatchToProps = (dispatch,ownProps)=>{
//     return {
//         dispatch:()=>{
//             dispatch(actionCreator)
//         }
//     }
// }

// function mergeProps(stateProps, dispatchProps, ownProps) {//mergeProps如果不指定，则默认返回 Object.assign({}, ownProps, stateProps, dispatchProps)，顾名思义，mergeProps是合并的意思，将state合并后传递给组件。
//     return Object.assign({}, ownProps, {
//       todos: stateProps.todos[ownProps.a],
//       addTodo: (text) => dispatchProps.addTodo(ownProps.userId, text)
//     })
//   }
export default connect(mapStateTpProps)(MyApp);// connect 进行与redux的连接