import { Component } from "react";

class Header extends Component{
    constructor(props){
        super()
        this.state={
            text: "text"
        }
    }
    render(){
        return(

            <h2 style={{textTransform:"capitalize"}} className={this.props.class}>{this.props.name}</h2>
        )
    }
}
export default Header