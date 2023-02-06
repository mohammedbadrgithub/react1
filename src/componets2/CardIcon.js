import {BsCart} from "react-icons/bs"
import {useSelector } from "react-redux"
const CardIcon = ()=>{
    const myCards = useSelector((state) => state.RInc_Cards.cards)
   // const myObjects = useSelector((state) => state.RObjectReducer.Objects)
    return(
    <div className="">
        <BsCart/>
        {myCards.length}
    </div>
    )
}
export default CardIcon