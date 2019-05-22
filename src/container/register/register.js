import React from "react";
import Logo from "../../component/logo/logo"
import {List,InputItem,Radio,WingBlank,WhiteSpace,Button} from "antd-mobile"
import {register} from"../../redux/user.redux"
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom'
import "../../index.css"
@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
   constructor(props) {
       super(props);
       this.state={
           user:"",
           pwd:"",
           repeadpwd:"",
           type:"genius"
       }
       this.Register=this.Register.bind(this)
   }
   handleChange(key,val) {
        this.setState({
            [key]:val
        })
   }
   Register() {
       this.props.register(this.state)
       console.log(this.state)
   }
    render() {
        const RadioItem = Radio.RadioItem
        return(
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
            <Logo/>
            <h1>注册</h1>
            <WingBlank>
                <List>
                    {this.props.msg?<p className="error_msg">{this.props.msg}</p>:""}
                    <InputItem onChange={v=>this.handleChange('user',v)}
                    >用户</InputItem>
                    <WhiteSpace/>
                    <InputItem type="password"
                     onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                    <InputItem type="password"
                     onChange={v=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
                    <RadioItem onChange={()=>this.handleChange('type',"genius")} 
                                checked={this.state.type=="genius"}
                                >
                        牛人
                    </RadioItem> 
                    <RadioItem onChange={()=>this.handleChange('type',"boss")}
                               checked={this.state.type=="boss"}
                               >
                        Boss
                    </RadioItem>   
                </List>
                <WhiteSpace/>
                <Button  type="primary" onClick={this.Register}>注册</Button>
            </WingBlank>
        </div>
        )
    }
}
export default Register