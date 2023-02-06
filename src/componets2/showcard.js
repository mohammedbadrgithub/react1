import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import {AiTwotoneStar ,AiOutlineStar} from "react-icons/ai"
function stars(e){
  
    let stars = []
    for (let index = 0; index < Math.floor(e); index++) {
  
      stars.push(<AiTwotoneStar/>)
      
    }
    return stars
    
  }

const ShowCard = ()=>{
  
    let id = useParams('id')
    let genera = useParams('genera') 
    const [object,SetObject] = useState() 
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${genera.genera}/${id.id}?&api_key=9b743af1d4fde1d65af33c40dcccce87`)
        .then((data) =>{ SetObject(data.data);console.log(data.data)})
        .catch((err) => console.log(err))
    }, [])
    
     return object &&  (
        
    <div style={{backgroundImage:`https://image.tmdb.org/t/p/w500${object.backdrop_path}`}} >
        <div className="container">
                <h1>{object.title}</h1>
                <div className="row justify-content-center ">
                    <div className="col-md-4 col-sm-8">
                        <img style={{maxHeight:"500px"}} src={`https://image.tmdb.org/t/p/w500${object.poster_path}`} class="img-thumbnail" alt={object.title} / >
                    </div>
                    <div className="col-md-8 col-sm-8">
                        <h2>{object.original_title}</h2>
                        <p>{object.overview}</p>
                        <div className="text-warning fs-3 "  >{stars(object.vote)}</div>
                        </div>
                </div>
        </div>
    </div>
    )
  
}
export default ShowCard