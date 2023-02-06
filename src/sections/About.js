import { Component } from "react";
import Header from "../components/header";
import Btn from "../components/btn";
import { Link } from "react-router-dom";
class About extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="about pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-4">
                        <Header name="About me" class="text-dark fs-1 "  />
                        </div>
                        <div className="col-sm-12 col-lg-8">
                            <p className="mb-5"> d they are used to pass data between React
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
                            <a href="../../public/logo512.png" download target="_blank">
                            <Btn borderColor="dark fs-3 text-light p-2 rounded bg-dark" download href="mycv.pdf"  stylecus="text-transform:uppercase" text="download my CV" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About