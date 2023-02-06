import React from 'react'
import { NavLink} from "react-router-dom"
import CardIcon from "../componets2/CardIcon"
function NavbarComponent() {
  return (
    <div className='container'>
  <nav className="navbar navbar-expand-lg  bg-dark text-light shadow pt-4 pb-4 rounded navbar-fixed ">
 
  <div className="container-fluid">
    <NavLink className="navbar-brand" to={"/"}>Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link  text-light" aria-current="page" to={"/lab2"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  text-light" aria-current="page" to={"/sign"}>sign</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  text-light" aria-current="page" to={"/MyFavourite"}>MyFavourite</NavLink>  
        </li>
      </ul>
   
    </div>
    
  </div>
 <CardIcon/>
</nav>
</div>
    
  )
}

export default NavbarComponent
