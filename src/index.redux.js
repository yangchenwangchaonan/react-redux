
const ADD = "加机关枪"
const REM = "减机关枪"
// reduer
export function counter (state=1,action){
    switch (action.type){
        case ADD:
            return state+1;
        case REM:
            return state-1;
        default:
            return 10;
    }
}
// action creater
export function adds() {
    return {type:ADD}
}
export function rems() {
    return {type:REM}
}
export function async () {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(adds())
        },2000)
    }
}