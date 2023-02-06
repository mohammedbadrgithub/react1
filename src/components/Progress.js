import { Component } from "react";

class Progress extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div class="progress mb-4 "style={{height:"auto"}} >
            <span className="p-1 fs-3 fw-bolder bg-secondary" style={{height:"100%",textTransform:"uppercase"}}>{this.props.skill}</span>
            <div className="progress-bar progress-bar-striped bg-info p-1" role="progressbar" aria-label="Info striped example" style={{width:`${this.props.parsentage}%`,height:"50px"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        )
    }
}
export default Progress