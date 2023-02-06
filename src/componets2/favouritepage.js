
import { useState ,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Card  from "./card"


const FavouritePage = ()=>{

const myCards = useSelector((state) => state.RObjectReducer.Objects)
const myCardId = useSelector((state) => state.RInc_Cards.cards)
  



    return(
        <div className="fovouritePage">
            <div className="container">
                <div className="row">
                    {
                        myCards.map((c,i)=>{

                            return(

                            <Card image={c.poster_path} bool={myCardId.some(a=>a === c.id) ? true : false } Id={c.id} object={c}  vote={c.vote_average} key={i} title={c.title} />

                            )
                        })
                    }
                    </div>
            </div>
        </div>
    )

}
export default FavouritePage