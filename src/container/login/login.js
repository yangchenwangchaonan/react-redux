import React from "react";
import Logo from "../../component/logo/logo"
import {List,InputItem,WingBlank,WhiteSpace,Button} from "antd-mobile"
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.Register=this.Register.bind(this)
    }
    Register(){
        this.props.history.push("/register")
    }
    render() {
        return(
            <div>
                <Logo/>
                <h1>登录</h1>
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button  type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.Register} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export default Login