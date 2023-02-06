import { useState } from "react"

const Form2 =()=>{
    
    const [validate,setvalidate] = useState({
        name:"",
        username:"",
        email:"",
        passwd:"",
        repasswd:""
    });
    const [errors,seterrors] = useState({
        name:"",
        username:"",
        email:"",
        passwd:"",
        repasswd:""
    })
    const [show,setshow] = useState(false)

const handlechange = (e)=>{
/// set states values 
for(let obj in validate){
   if(obj === e.target.name){
        setvalidate({...validate,[obj]:e.target.value})
   }

}
/// validate username
if(!nospace(validate.username)){
    seterrors({
        ...errors,username:"no spaces permitted in username "
    })
}
else{
    seterrors({
        ...errors,username:""
    }) 
}

if(!isValidEmail(validate.email)){
    seterrors({
        ...errors,email:"enter valide email"
    })
   }else{
    seterrors({
        ...errors,email:""
    })
   }
  
   if(validate.passwd.length < 8){
    seterrors({
        ...errors,passwd:"passwd can be less than 8 characters "
    })
   }else if(specialCharater(validate.passwd)){
    seterrors({
        ...errors,passwd:"passwd must contain special characters  "
    })
   }else{ 
    seterrors({
        ...errors,passwd:""
    })
   }
   if(validate.passwd !== validate.repasswd ){
    seterrors({
        ...errors,repasswd:"must match"
    })
   }else{
    seterrors({
        ...errors,repasswd:""
    })
   }
    
}

const handleSubmit = (e)=>{
    e.preventDefault();
    if(validate.name === ""){
        seterrors({
           name:"name input is required !" 
        })
        if(validate.username === ""){
            seterrors({
                username:"username input is required !" 
             })
        }
        if(validate.email === ""){
            seterrors({
                email:"email input is required !" 
             })
        }
        if(validate.passwd === ""){
            seterrors({
               passwd:" input is required !" 
             })
        }
        if(validate.repasswd === validate.passwd){
            seterrors({
                repasswd:"does not match " 
             })
        }
    }
    console.log("these are : ",errors);
    /*
    for(let obj in errors){
       
        if(obj !== ""){
            console.log("empty")
            seterrors(
                {
                   ...errors, obj:`${[obj]}  input is required !`
                }
            )
        }
    
    }
    console.log("these are : ",errors);  */
}
    return(
<div className="lab2 pt-5 pb-5">
    <div className="container l">
    <form class=" g-3">
        <div class="col-md-6">
                <label  class="form-label">name</label>
                <input type="text" class="form-control" value={validate.name} name="name" id="inputEmail4" onChange={(e)=>handlechange(e)}  />
                <p>{errors.name}</p>
            </div>
            <br/>
            <div class="col-md-6">
                <label  class="form-label">user name</label>
                <input type="text" class="form-control" id="inputEmail4" name="username" value={validate.username} onChange={(e)=>handlechange(e)}  />
                <p>{errors.username}</p>
            </div>
            <br/>

            <div class="col-md-6">
                <label  class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" name="email" value={validate.email} onChange={(e)=>handlechange(e)}  />
                <p>{errors.email}</p>
            </div>
            <br/>
            <div class="col-6">
                <label class="form-label">password</label>
                <input type={show ? "password": "text" } class="form-control" name="passwd" id="inputAddress" value={validate.passwd} onChange={(e)=>handlechange(e)} placeholder="password" />
                <p>{errors.passwd}</p>
                <button onClick={(e)=>{ e.preventDefault() ;show ?setshow(false) : setshow(true)} }>show password</button>
            </div>
            <br/> 
            <div class="col-6">
                <label class="form-label">repassword</label>
                <input type={show ? "password": "text" } class="form-control" name="repasswd" id="inputAddress" value={validate.repasswd} onChange={(e)=>handlechange(e)} placeholder="password" />
                <p>{errors.repasswd}</p>
                <button onClick={(e)=>{ e.preventDefault() ;show ?setshow(false) : setshow(true)} }>show password</button>
            </div>
            <br/>
            <div class="col-12">
                <button type="submit" onClick={(e)=>handleSubmit(e)} class="btn btn-primary">Sign in</button>
            </div>
    </form>
    </div>
    
 </div>
    )
}
export default Form2
function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
function nospace(element){
return /^\S+$/.test(element);
}
function specialCharater(element){
// return /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(element)

return /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]g/.test(element)
}