import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Listmovies(props) {
    const {data} = useSelector(state =>state.cartState);
    const listMovies = [];
    useEffect(() =>{
        
        listMovies.push(data);
        localStorage.setItem("watchlist",JSON.stringify(listMovies));
       
    },[data]);
    const listdata = data.map((item,i) =>{
        return(
            <div className ="col-md-2" key ={i}>
            <div className ='card mb-4'>
              <Link to ={`/movie/${item.id}`}>
              <img
          className="img-fluid "
          src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
          alt={item.name}
        ></img>
              </Link>
            </div>
          </div>
        )
    })
    return (
        <div className ="listmovie">
        <Header/>
        <div className ='container mt-4'>
        <div className ="row">
            {listdata}
        </div>
        <Footer/>
        </div>
        </div>
    );
}

export default Listmovies; 