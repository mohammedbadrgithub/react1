import { useRef, useState } from "react"

const Form =()=>{
    const [email,setemail] = useState('');
    const [passwd,setpasswd] = useState('');
    const emailimput = useRef();
    const passwdimput = useRef();
    const [errors,seterrors] = useState({
        emailError:"",
        passwdError:""
    })
    const [show,setshow] = useState(false)
function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
const handlechage = (e)=>{
    
    if(e.target.type ==="email"){
       setemail(e.target.value)
      if(!isValidEmail(e.target.value)){
        seterrors({
            ...errors,emailError:"enter valide email"
        })
       }else{
        seterrors({
            ...errors,emailError:""
        })
       }
    }else{
        setpasswd(e.target.value);
        if(e.target.value.length < 8){
            seterrors({
                ...errors,passwdError:"the password can not be less than 8 character"
            })
        }else{
            seterrors({
                ...errors,passwdError:""
            })
        }

    }
    
}
const handleSubmit = (e)=>{
    e.preventDefault();
    

    if(emailimput.current.value == ""){
        seterrors({
         ...errors,emailError:"email input is required"
        });
    }else{
        seterrors({
            ...errors,emailError:""
           });
    }
    if(passwdimput.current.value === ""){
        seterrors({
         ...errors,passwdError:"passwd input is required"
        });
    }else{
        seterrors({
            ...errors,passwdError:""
           });
    }
    
}
    return(
<div className="lab2 pt-5 pb-5">
    <div className="container l">
    <form class="row g-3">
            <div class="col-md-6">
                <label  class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" ref={emailimput} onChange={(e)=>handlechage(e)} value={email} />
                <p>{errors.emailError}</p>
            </div>

            <div class="col-6">
                <label class="form-label">Address</label>
                <input type={show ? "password": "text" } class="form-control" ref={passwdimput} id="inputAddress" value={passwd} onChange={(e)=>handlechage(e)} placeholder="password" />
                <p>{errors.passwdError}</p>
                <button onClick={(e)=>{ e.preventDefault() ;show ?setshow(false) : setshow(true)} }>show password</button>
            </div>

            <div class="col-12">
                <button type="submit" onClick={(e)=>handleSubmit(e)} class="btn btn-primary">Sign in</button>
            </div>
    </form>
    </div>

 </div>
    ) 
}
export default Form