import { Component } from "react";
import Header from "../components/header";
class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio pt-5 pb-5" >
                <div className="container"> <Header name="portfolio" class="text-dark pb-4"  /></div>
                <div className="container portfolio" style={style}>
                   {
                    arr.map((a,i)=>{
                        return(
                            <div key={i} className={(i % 2 ) != 0 ? "bg-dark text-light rounded shadow":"bg-secondary text-dark rounded shadow "} style={{height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}} >
                                <Header name={a} class={(i % 2) == 0 ? "text-dark fs-1 text-center":" text-light fs-1 text-center "}  />
                            </div>
                        )
                    })
                   }
                 
                </div>
            </div>
        )
    }
}
export default Portfolio
let style = {
    display:"grid",
    gridTemplateColumns:"repeat(auto-fill,minmax(350px,1fr))",
    gridGap:"20px"
}
let arr = ["web design","UX-design","mobile design" , "logo design" ,"pwa design" ,"web applicaitons"]
///col-log-4 col-md-6 col-sm-8 