import { Component } from "react";
import Header from "../components/header";
import Progress from "../components/Progress";
class Skills extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="bg-dark pt-5 pb-5">
                <div className="container">
                <Header name="About me" class="text-light fs-1 text-center "  />
                <p className="mb-5 text-center text-light"> d they are used to pass data between React
                                components. React’s data flow between components is uni-directional (from
                                parent to child only).
                                In a class component, props are passed by default. There is no need to add
                                anything special, and they are accessible as this.props in a Component
                                d they are used to pass data between React
                                components. React’s data flow between components is uni-directional (from
                                parent to child only).
                                In a class component, props are passed by default. There is no need to add
                                anything special, and they are accessible as this.props in a Component
                 </p>
                <div className="row">
                    <div className="col-lg-6 justify-content-center align-items-center d-flex " style={{flexDirection:'column'}} >
                    <ul class="list-group list-group-flush bg-dark">
                    <Header name="my focus" class="text-light fs-4 text-center "  />
                        {
                            arr.map((l,i)=>{
                                return(
                                    <li  class="list-group-item bg-dark text-light text-center fs-3" key={i}>{l}</li>
                                )
                            })
                        }
                     
                    </ul>
                    </div>
                    <div className="col-lg-6 ">
                    {
                       skills.map((a,i)=>{
                            return(

                                <Progress key={i} parsentage={a.pars} skill={a.text} />
                            )
                        })
                    }
                       
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}
export default Skills
let arr = ["UX design" , "responsive design" ,"web design","mobile design"]
let skills = [
    {text:"html5",pars:"70"},
    {text:"css3",pars:"40"},
    {text:"js",pars:"80"},
    {text:"react",pars:"70"},
    {text:"jq",pars:"30"}
]
