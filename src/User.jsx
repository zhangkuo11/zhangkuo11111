import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from './actions'
class User extends Component {
    render() {
        let {getUser} = this.props;
        let {isLoading,user,error}=this.props.user;
        console.log("this.props.user",this.props.user);
        let data=null;
        if(isLoading){
            data="Loading.....";
        }else if(error){
            data=error;
        }else{
            data=user.email;
        }
        return (
            <div>
                <h3>User组件</h3>
                <p>{ data }</p>
                <button onClick={()=>getUser()}>get email</button>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps,{getUser})(User);
