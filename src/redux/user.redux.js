import axios from"axios"
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = "ERROR_MSG"
const initState={
    isAuth:false,
    msg:"",
    user:"",
    pwd:"",
    type:""
}
export function user(state=initState,action){
    switch(action.type){
    case REGISTER_SUCCESS:
        return {...state, msg:"",isAuth:true,...action.payload}
    case ERROR_MSG:
        return {...state, isAuth:false, msg:action.msg}
    default:
        return state
    }
}
export function register({user,pwd,type,repeatpwd}) {
    if(!user || !pwd || !type){
        return errorMsg("用户名密码不能为空")
    }
    if(repeatpwd!=pwd) {
        return errorMsg("两次密码输入的不一致")
    }
    return dispatch=>
    axios.post('/user/register',{user,pwd,type})
        .then(res=>{
            if(res.status==200 && res.data.code==0) {
                dispatch(RegisterSuccess(user,pwd,type))
            }else {
                dispatch(errorMsg(res.data.msg))
            }
        })
}
function RegisterSuccess(data) {
    return {type:REGISTER_SUCCESS,payload:data}
    
}
function errorMsg(msg) {
    return {msg,type:ERROR_MSG}
}