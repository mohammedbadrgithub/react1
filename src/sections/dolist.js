import { useRef, useState } from "react";


const Dolist = ()=>{


    const [list,setlist] = useState(["task1","task2"])
    const inputvalue = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
       
        if(inputvalue.current.value != ""){
            setlist([...list ,inputvalue.current.value])
            inputvalue.current.value = ""
            inputvalue.current.style.cssText = "border:1px solid inherit"
        }else{
            inputvalue.current.style.cssText = "border:2px solid #f00"
        }

    }
    const deletelist =(e)=>{
       let arr = list;
       let newarr =  arr.filter(a=>a !== arr[e]) 
       setlist([...newarr]);
       
    }
    return(
        <div className="dolist">
            <div className="container">
                <form class=" g-3">
                    <div class="col-md-6">
                            <label  class="form-label">name</label>
                            <input type="text" class="form-control" id="inputEmail4" ref={inputvalue} />
                        
                        </div>
                        <br/>
                        <div class="col-12">
                    <button type="submit" onClick={(e)=>handleSubmit(e)} class="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
            <hr/>
            <div className="container">
                <ul class="list-group">
                    {list.map((l,i)=>{
                        return(

                            <li class="list-group-item" key={i} >{l} <button onClick={()=>deletelist(i)} className="btn btn-danger">delete</button> </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Dolist