import React from "react"
import axios from "axios"
import {withRouter} from "react-router-dom"
@withRouter
class AuthRoute extends React.Component{
    componentDidMount() {

        // 获取用户信息
        // 是否登录
        // 目前是login不要跳钻
        // 用户身份
        // 用户是否完善信息
        const publicList = ["/login","register"]
        if(publicList.indexOf(this.props.location.pathname)>-1){
            return;
        }
        axios.get("/user/info").
            then(res=>{
                if (res.status==200){
                    if(res.data.code==0){

                    }else{
                        this.props.history.push('/login')
                    }
                }
            })
    }
    render() {
        return(
            <div></div>
        )
    }
}
export default AuthRoute