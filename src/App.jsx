import React, { Component } from 'react'
import {connect} from 'react-redux'
class App extends Component {
    render() {
        console.log("App this.props",this.props);
        let {count,dispatch}=this.props;      
        return (
            <div>
                <h3>App组件</h3>
                <p>{ count }</p>
                <button onClick={()=>dispatch({type:"ADD"})}>+</button>
                <button onClick={()=>dispatch({type:"SUB"})}>-</button>
            </div>
        )
    }
}   
    //   map找到State添加到当前组件的this.props/props上
    //                    state就是store中的state
                       //ownProps就是自己身属性{name:"tom",age:"19"}
    const mapStateToProps = (state,ownProps) => {
         //返回的对象，添加到或合并到当前this.props;
       //相当于:this.props=Object.assign(this.props,{count:state})
         return {
             count:state
        }
    }
export default connect(mapStateToProps)(App);
