import { Component } from "react";

class Btn extends Component{
    constructor(props){
        super()
      
    }
    render(){
        return(
            <a className={`border border-${this.props.borderColor}`} style={{textDecoration:"none", cursor:"pointer", textTransform:"uppercase",background:"transparent" }} >
                {this.props.text}
            </a>
        )
    }
}
export default Btn