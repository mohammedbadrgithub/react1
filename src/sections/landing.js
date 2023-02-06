import { Component } from "react";
import image from "../images/landing.jpg"
import Header from "../components/header";
import Btn from "../components/btn"

class Landing extends Component{
    render(){
        return(
            <div className="landing bg-dark text-light"  style={{backgroundImage: `url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'250px',height:"100vh",backgroundColor:'#0f0e0d' }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 justify-content-center align-items-center d-flex " style={{height:"100vh" ,flexDirection:'column'}} >
                            <Header name="kaite reed" class="text-light fs-1 "/>
                            <p className="fs-3 mb-4"> web developer & designer  </p>
                            <Btn borderColor="light fs-3 text-light p-2 rounded" stylecus="text-transform:uppercase;background:transparent" text="contact me" />
                        </div>
                    </div> 
                    
                </div>
                
            </div>
        )
    }
}
export default Landing