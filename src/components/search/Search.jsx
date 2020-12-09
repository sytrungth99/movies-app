import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
const posterURl ="https://image.tmdb.org/t/p/w500";
const apiKey ="ed909d4ca185bc18954a92bfe5f57e97";

function Search(props) {
    const [query,setquery] = useState('');
    const [result,setresult] = useState([]);
    console.log('query',query);
    console.log('result',result);
    const onChange =(e) =>{
        e.preventDefault();
        setquery(e.target.value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then(res => res.json())
        .then(data =>{
            setresult(data.results);
        })
    };
    const listMovieSearch = result.map((item,i) =>{
        return(
            <div className ="col-md-3" key ={i}>
            <div className ='card mb-4'>
              <Link to ={`/movie/${item.id}`}>
                <img className="img-fluid" src ={`${posterURl}${item.poster_path}`} alt ={item.title}></img>
              </Link>
            </div>
          </div>
        )
    })
    return (
        <div>
            <Header/>
        <div className ="container mt-3">
            <input type ="text" className ="form-control" placeholder ="search movie" value ={query} onChange ={onChange}/>
            <div className = "row mt-5">
                {listMovieSearch}
            </div>
        </div>
        </div>
    );
}

export default Search;