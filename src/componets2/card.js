import { Link} from "react-router-dom"
import {AiTwotoneStar ,AiOutlineStar} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { increamentCards } from "../componets2/Store/Actions/CardAction"
import { increamentobject } from "../componets2/Store/Actions/ObjectActio"
import { useState } from "react"
function stars(e){
  
  let stars = []
  for (let index = 0; index < Math.floor(e); index++) {

    stars.push(<AiTwotoneStar/>)
    
  }
  return stars
  
}
const Card = (props)=>{

  const [star,setStar] = useState(props.bool)
  const myCards = useSelector((state) => state.RInc_Cards.cards)
  const myObjects = useSelector((state) => state.RObjectReducer.Objects)
  const dispatch = useDispatch()
  const dispatchObject = useDispatch()
   const IncreamentCards = () => {

    
    if(myCards.some(a=>a === props.Id)){
        let myC = myCards.filter(a=>a !== props.Id)
        dispatch(increamentCards([...myC]))
        //////////////////////////////////////////
        let myB = myObjects.filter(a=>a.id !== props.Id)
        dispatchObject(increamentobject([...myB]))
    }else{
      dispatch(increamentCards([...myCards ,props.Id]))
      dispatchObject(increamentobject([...myObjects ,props.object]))
    }
    //dispatchObject(increamentobject([...myObjects ,props.object]))
    // if(! myCards.some(a=> a === props.Id) && ! myObjects.some(a=>a.id !== props.Id) ){

    // }else{
    //   let newArrid = myCards.filter(a=>a !== props.Id ) 
    //   let newArrob = myObjects.filter(a=>a.id !== props.object.id ) 
    //   dispatch(increamentCards([...newArrid]))
    //   dispatch(increamentobject([...newArrob]))
    // }
     star   ? setStar(false) : setStar(true)
     
  
   }
    return(
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-8 mb-4">
      
      <div className="fs-1"> { star  ?  <AiTwotoneStar className="text-warning fs-3 " onClick={() => IncreamentCards()}  />  : <AiOutlineStar className="text-warning fs-3 " onClick={() => IncreamentCards()} /> }</div>
    <div className="card bg-dark shadow" >
  <img src={props.image !== "" ? `https://image.tmdb.org/t/p/w500${props.image}` : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUAAAD///9bWVrm5uaqqqqgoKBPT0/z8/ORkZHg4OB1dXWzs7PU1NTr6+vv7+86OjqAfn/MzMxsbGyXl5fAwMCHh4djY2PHx8dfX1+dnZ1ISEguLi66urpVVVV3d3evr69BQUElJSUvLy8MDAwXFxes5b5hAAADzUlEQVR4nO3b23LaMBSFYQljsDEQGxtIiM2hzfs/Y6UtnEna5EITSbDo+i8am4LQF587U1UPk0duqNWgHrtBTW49hchNKISPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvyCCk/TUJ3CTSqoUIcr3KQo9MrMrHzJf9pLedfCuxpHotArClOPI1HoFYWpx5Eo9IrC1ONIFHpFYepxJAq9ojD1OBKFXlGYehyJQq8oTD2ORKFXFKYeR6LQKwpTjyNR6BWFqceRKPSKwtTjSBR6RWHqcSQKvaIw9TgShV5RmHociUKvKEw9jkShVxSmHkei0CsKU48jUegVhanHkSj0isLU40gUekVh6nEkCr0yM5seZj/tML1rYajCTYpCr7JgrcJNiv9bHT8K8aMQv9sLL23c8W8uzPUy7hfcWljrRxcutG7ifkMUYd3vq4VdeO2rWg39shvMcrVstua1Q1Ud1bYpm41Zafdar6YnVVTuA3ZhF3YyEYSvc7l3Xl+UOmtd5bJWb+SH2SPNQlXKSqfU+nqfvTVQ+bBZ+RV2OhGEBrjuM63nIpzr8iSO+Wlp/lyonV1ZCfJFlfa3sV6L7EkJvww8nfDCqTt39Fq3VqinSuZvvGpp13Zu6yn3nLu5Hofm7bn50Wm9DTyf8MK52xrKbo3z9UlvZbn2yqB7EY5v3NkzjZxLZ243Dfpk6AovtLvi8Xi0x516cttOZXb3NKcRu/WMMJM3NloX70L7Szjbvwt+Zg0uvHx8UB+F5qB7Vlfh82jq7IH4LmztHmz21U3Y6UQQ/jaybSG13wndafPzNjSfW8fYSePspW/j8gehvcqNQveGT8ehgM01owo8mxjCvZvmptn33wobt6LlnuZ6eXAXzFng2cQQ2vNnt2ntzvqlcCK3A5W9OLZyDtXLprBvktcDT0ZFueLX1/NM9dVeurfCLBvvaWRfdddMuUDmoScT5770qc/m68aSLvtODqy86+zut+u6wgpLVSyzxp01L325ymq7dHZ3bMdt2Gt++meLYbwe/l0rh+SszRdB773vRziRI1dN2vw56DXxXoRyYMoxu62LoN93E+EXZ0wBnmN8X3rh2+xw/vfVTVEEfvIdu/W/YsSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjE738QDreeQuQGVQ+TR26o/wC/TiXuOSy+6AAAAABJRU5ErkJggg=='} className="card-img-top" alt={props.title}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.des}</p>
    <div className="text-warning fs-3 "  >{stars(props.vote)}</div>
    <Link to={`/show/${props.genera}/${props.Id}`} className="btn btn-primary">show</Link> 
  </div>
</div>
</div>
    )
}
export default Card;