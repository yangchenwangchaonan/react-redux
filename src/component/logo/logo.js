import React from "react";
import logoimg from "./timg.jpg"
import "./logo.css"
class Logo extends React.Component{
    render() {
        return(
            <div className="logo">
                <img src={logoimg}/>
            </div>
        )
    }
}
export default Logo