import React from 'react'
import {adds,rems,async} from "./index.redux"
import {connect} from "react-redux"
import axios from "axios"

// const mapStateProps =(state) => {
//     return {num:state}
// }
// const actionCreators ={adds,rems,async}
@connect(
    state=>({num:state}),
    {adds,rems,async}
)

class App extends React.Component{
    componentDidMount() {
        axios.get("/data")
            .then(res=>{
                console.log(res)
            })
    }
    render () {
        const num = this.props.num
        const adds= this.props.adds
        const async = this.props.async
        return (
            <div>
                <h1>机关枪几把{num}</h1>
                <button onClick={adds}>增加</button>
                <button onClick={this.props.rems}>减少</button>
                <button onClick={async}>加加</button>

            </div>
        )
    }
}

export default App