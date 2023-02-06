import { Component } from "react";
import Btn from "../components/btn"

class Footer extends Component{
    render(){
        return(
            <footer className="bg-dark pt-5 pb-5 text-light ">
                <div className="container">
                  <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <h2  >git in touch </h2>    
                  <i class="bi bi-envelope-at"></i>
                  <span> {" "}@gmail.com</span>
                  <br/>
                  <i class="bi bi-phone"></i>
                  <span>+20 000 000 000 </span>
                    
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-8 text-center">
                     
                 <Btn borderColor="light fs-3 text-light p-2 rounded" stylecus="text-transform:uppercase;background:transparent" text="contact me" />
                
             </div>
             <div className="col-lg-4 col-md-6 col-sm-8 text-end "  >
            <div  className="mb-4" style={{display:"flex",justifyContent:"flex-end",gap:"10px"}}>
             <a class="list-group-item list-group-item-action" style={{display:"inline-block",width:'fit-content'}}><i class="bi bi-facebook fs-4"></i></a>
             {"  "}
             <a class="list-group-item list-group-item-action" style={{display:"inline-block",width:'fit-content'}}><i class="bi bi-whatsapp fs-4"></i></a>
             {"  "}
             <a class="list-group-item list-group-item-action" style={{display:"inline-block",width:'fit-content'}}><i class="bi bi-linkedin fs-4"></i></a>
            </div>
            <div style={{textTransform:"uppercase"}}>copy Right 2023</div>
             </div>
                  </div>
                </div>
            </footer>
        )
    }
}
export default Footer