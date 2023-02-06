import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../card";
import {  useSelector } from "react-redux"
//import { axiosInstance } from "../Network/axiosInstanc"
const Home = ()=>{
    const [card,setcard]=useState([]);
    const [movietV,setmovietv] = useState('movie')
    const [sort,setSort] = useState('popularity')
    const [pagen,setpage] = useState(1)
    const [search,setsearch] = useState('');
    const myCards = useSelector((state) => state.RInc_Cards.cards)
    //https://api.themoviedb.org/3'/search/movie?&api_key=9b743af1d4fde1d65af33c40dcccce87
    //https://api.themoviedb.org/3/movie/88009?&api_key=9b743af1d4fde1d65af33c40dcccce87
const API_KEY = 'api_key=9b743af1d4fde1d65af33c40dcccce87';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + `/discover/${movietV}?sort_by=${sort}.desc&${API_KEY}&page=${pagen}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;
    useEffect(()=>{
        axios.get(`${API_URL}`)
        .then(res=>{setcard(res.data.results);console.log(res)})
        .catch(err=>console.log(err))
    },[movietV,sort,pagen])
    useEffect(()=>{
        axios.get(`${searchURL}&query=${search}`)
        .then(res=>setcard(res.data.results))
        .catch(err=>console.log(err))
    },[search])
function handlesearch(e){
    console.log(e.target.value);
    setsearch(e.target.value);
}
return(
    <div className="home pt-5 pb-5">
        <div className="container">
                <div className="row mb-5">
                    <select className="form-select bg-dark text-light col-6 " onChange={(e)=>setmovietv(e.target.value)} aria-label="Default select example">
                        <option  className="mb-1" value="movie">Movie</option>
                        <option className="mb-2" value="tv">TV-show</option>
                        
                    </select>
                     
                    <select className="form-select bg-dark text-light col-6 mt-4 mb-4" onChange={(e)=>setSort(e.target.value)} aria-label="Default select example">
                        <option value="popularity" >popularity</option>
                            {
                                genres.map((g,i)=>{
                                    return(
                                        <option className="mb-2"   value={g.name} key={g.id} >{g.name}</option>
                                    )
                                })
                            }
                    </select>
                </div>
        </div>
        <div className="container">
        <form class="d-flex">
            <input class="form-control me-2" type="search" value={search} onChange={(e)=>handlesearch(e)} placeholder="Search" aria-label="Search"/>
        
        </form>
        </div>
        <div className="container">
                <h1 className="text-center">{movietV}</h1>
            <div className="row">
                {
                    card.map((c,i)=>{
                     
                        return(
                            <Card image={c.poster_path} bool={myCards.some(a=>a === c.id) ? true : false } Id={c.id} object={c} genera={movietV} vote={c.vote_average} key={i} title={c.title} />
                        )
                    })
                }
        </div>
        </div>
        <div className="container">
            <nav aria-label="...">
                <ul className="pagination justify-content-center ">
                <li className="page-item m-2"  onClick={(e)=>{
                    pagen === 0 && setpage(pagen - 1)
                }} aria-current="page" style={{cursor:"pointer"}} >
                                    <span className="page-link" >previous</span>
                                </li>
                    {  
                     
                        [1,2,3,4,5,6].map((p,i)=>{
                            return (
                                <li key={i} className={pagen === i ? "page-item m-2 active " :"page-item m-2" } style={{cursor:"pointer"}} onClick={(e)=>setpage(i)} aria-current="page"  >
                                    <span className="page-link" >{p}</span>
                                </li>
                            )
                        })
                    }
                    <li className="page-item m-2"  onClick={(e)=>setpage(pagen + 1)
                } aria-current="page" style={{cursor:"pointer"}}>
                                    <span className="page-link" >previous</span>
                                </li>
                </ul>
            </nav>
        </div>
    </div>
)
}
export default Home
const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]